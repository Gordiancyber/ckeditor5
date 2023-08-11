/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module special-characters/ui/specialcharactersview
 */

import { View, FocusCycler, type ViewCollection } from 'ckeditor5/src/ui';
import { FocusTracker, KeystrokeHandler, type Locale } from 'ckeditor5/src/utils';
import type CharacterGridView from './charactergridview';
import type CharacterInfoView from './characterinfoview';
import type SpecialCharactersCategoriesView from './specialcharacterscategoriesview';

/**
 * A view that glues pieces of the special characters dropdown panel together:
 *
 * * the navigation view (allows selecting the category),
 * * the grid view (displays characters as a grid),
 * * and the info view (displays detailed info about a specific character).
 */
export default class SpecialCharactersView extends View<HTMLDivElement> {
	/**
	 * A collection of the focusable children of the view.
	 */
	public readonly items: ViewCollection;

	/**
	 * Tracks information about the DOM focus in the view.
	 */
	public readonly focusTracker: FocusTracker;

	/**
	 * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
	 */
	public readonly keystrokes: KeystrokeHandler;

	/**
	 * Helps cycling over focusable {@link #items} in the view.
	 */
	public readonly focusCycler: FocusCycler;

	/**
	 * An instance of the `SpecialCharactersCategoriesView`.
	 */
	public categoriesView: SpecialCharactersCategoriesView;

	/**
	 * An instance of the `CharacterGridView`.
	 */
	public gridView: CharacterGridView;

	/**
	 * An instance of the `CharacterInfoView`.
	 */
	public infoView: CharacterInfoView;

	/**
	 * Creates an instance of the `SpecialCharactersView`.
	 */
	constructor(
		locale: Locale,
		categoriesView: SpecialCharactersCategoriesView,
		gridView: CharacterGridView,
		infoView: CharacterInfoView
	) {
		super( locale );

		this.categoriesView = categoriesView;
		this.gridView = gridView;
		this.infoView = infoView;
		this.items = this.createCollection();
		this.focusTracker = new FocusTracker();
		this.keystrokes = new KeystrokeHandler();

		this.focusCycler = new FocusCycler( {
			focusables: this.items,
			focusTracker: this.focusTracker,
			keystrokeHandler: this.keystrokes,
			actions: {
				focusPrevious: 'shift + tab',
				focusNext: 'tab'
			}
		} );

		this.setTemplate( {
			tag: 'div',
			children: [
				this.categoriesView,
				this.gridView,
				this.infoView
			],
			attributes: {
				class: [ 'ck', 'ck-special-characters' ],

				// Avoid focus loss when the user clicks the area of the grid that is not a button.
				// https://github.com/ckeditor/ckeditor5/pull/12319#issuecomment-1231779819
				tabindex: '-1'
			}
		} );

		this.items.add( this.categoriesView );
		this.items.add( this.gridView );
	}

	/**
	 * @inheritDoc
	 */
	public override render(): void {
		super.render();

		this.focusTracker.add( this.categoriesView.element! );
		this.focusTracker.add( this.gridView.element! );

		// Start listening for the keystrokes coming from #element.
		this.keystrokes.listenTo( this.element! );
	}

	/**
	 * @inheritDoc
	 */
	public override destroy(): void {
		super.destroy();

		this.focusTracker.destroy();
		this.keystrokes.destroy();
	}

	/**
	 * Focuses the first focusable in {@link #items}.
	 */
	public focus(): void {
		this.focusFirst();
	}

	/**
	 * TODO
	 */
	public focusFirst(): void {
		this.focusCycler.focusFirst();
	}

	/**
	 * TODO
	 */
	public focusLast(): void {
		this.focusCycler.focusLast();
	}
}
