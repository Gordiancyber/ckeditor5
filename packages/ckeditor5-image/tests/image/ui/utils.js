/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Image from '../../../src/image';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import View from '@ckeditor/ckeditor5-ui/src/view';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import BalloonPanelView from '@ckeditor/ckeditor5-ui/src/panel/balloon/balloonpanelview';
import { setData } from '@ckeditor/ckeditor5-engine/src/dev-utils/model';
import { repositionContextualBalloon, getBalloonPositionData } from '../../../src/image/ui/utils';
import ImageCaption from '../../../src/imagecaption';

describe( 'Utils', () => {
	const defaultPositions = BalloonPanelView.defaultPositions;
	const positions = [
		defaultPositions.northArrowSouth,
		defaultPositions.northArrowSouthWest,
		defaultPositions.northArrowSouthEast,
		defaultPositions.southArrowNorth,
		defaultPositions.southArrowNorthWest,
		defaultPositions.southArrowNorthEast,
		defaultPositions.viewportStickyNorth
	];

	let editor, converter, selection, balloon, editorElement;

	beforeEach( () => {
		editorElement = document.createElement( 'div' );
		document.body.appendChild( editorElement );

		return ClassicEditor
			.create( editorElement, {
				plugins: [ Image, Paragraph, ContextualBalloon, ImageCaption ]
			} )
			.then( newEditor => {
				editor = newEditor;
				converter = editor.editing.view.domConverter;
				selection = editor.editing.view.document.selection;
				balloon = editor.plugins.get( 'ContextualBalloon' );
			} );
	} );

	afterEach( () => {
		editorElement.remove();

		return editor.destroy();
	} );

	describe( 'repositionContextualBalloon', () => {
		it( 'should re-position the ContextualBalloon when the image is selected', () => {
			const spy = sinon.spy( balloon, 'updatePosition' );
			const view = new View();

			view.element = document.createElement( 'div' );

			balloon.add( {
				view,
				position: {
					target: document.body
				}
			} );

			setData( editor.model, '[<imageBlock src=""></imageBlock>]' );
			repositionContextualBalloon( editor );

			sinon.assert.calledWithExactly( spy, {
				target: converter.mapViewToDom( selection.getSelectedElement() ),
				positions
			} );
		} );

		it( 'should re-position the ContextualBalloon when the selection is inside a block image caption', () => {
			const spy = sinon.spy( balloon, 'updatePosition' );
			const view = new View();

			view.element = document.createElement( 'div' );

			balloon.add( {
				view,
				position: {
					target: document.body
				}
			} );

			setData( editor.model, '<imageBlock src=""><caption>[Foo]</caption></imageBlock>' );
			repositionContextualBalloon( editor );

			sinon.assert.calledWithExactly( spy, {
				target: converter.mapViewToDom( selection.getFirstPosition().parent.parent.parent ),
				positions
			} );
		} );

		it( 'should not engage with no image is selected', () => {
			const spy = sinon.spy( balloon, 'updatePosition' );

			setData( editor.model, '<paragraph>foo</paragraph>' );

			repositionContextualBalloon( editor );
			sinon.assert.notCalled( spy );
		} );
	} );

	describe( 'getBalloonPositionData', () => {
		it( 'returns the position data if selection is on an image', () => {
			setData( editor.model, '[<imageBlock src=""></imageBlock>]' );
			const data = getBalloonPositionData( editor );

			expect( data ).to.deep.equal( {
				target: converter.mapViewToDom( selection.getSelectedElement() ),
				positions
			} );
		} );

		it( 'returns the position data if selection is in a block image caption', () => {
			setData( editor.model, '<imageBlock src=""><caption>Foo[]</caption></imageBlock>' );
			const data = getBalloonPositionData( editor );

			expect( data ).to.deep.equal( {
				target: converter.mapViewToDom( selection.getFirstPosition().parent.parent.parent ),
				positions
			} );
		} );
	} );
} );
