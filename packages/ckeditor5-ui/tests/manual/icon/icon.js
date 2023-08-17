/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import IconView from '../../../src/icon/iconview';
import testUtils from '../../_utils/utils';

const icon = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
	<path d="M2 14.994C2 16.102 2.895 17 3.994 17h12.012A2 2 0 0 0 18 14.994V5.006A2.001 2.001 0 0 0
	16.006 3H3.994A2 2 0 0 0 2 5.006v9.988zm1-9.992C3 4.45 3.45 4 4.007 4h11.986A1.01 1.01 0 0 1 17
	5.002v9.996C17 15.55 16.55 16 15.993 16H4.007A1.01 1.01 0 0 1 3 14.998V5.002zm1.024
	10H16v-3.096l-2.89-4.263-3.096 5.257-3.003-2.103L4 13.96l.024 1.043zM6.406 6A1.4 1.4 0 0 0 5
	7.393a1.4 1.4 0 0 0 1.406 1.393 1.4 1.4 0 0 0 1.407-1.393A1.4 1.4 0 0 0 6.406 6z"
	fill-rule="evenodd"/>
</svg>`;

const iconDirty = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg">
	<title>Title</title>
	<desc>Desc</desc>
	<path d="M2 14.994C2 16.102 2.895 17 3.994 17h12.012A2 2 0 0 0 18 14.994V5.006A2.001 2.001 0 0 0
	16.006 3H3.994A2 2 0 0 0 2 5.006v9.988zm1-9.992C3 4.45 3.45 4 4.007 4h11.986A1.01 1.01 0 0 1 17
	5.002v9.996C17 15.55 16.55 16 15.993 16H4.007A1.01 1.01 0 0 1 3 14.998V5.002zm1.024
	10H16v-3.096l-2.89-4.263-3.096 5.257-3.003-2.103L4 13.96l.024 1.043zM6.406 6A1.4 1.4 0 0 0 5
	7.393a1.4 1.4 0 0 0 1.406 1.393 1.4 1.4 0 0 0 1.407-1.393A1.4 1.4 0 0 0 6.406 6z"
	fill-rule="evenodd"/>
</svg>`;

const iconViewBox = `<svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 26.24c0 1.939 1.566 3.51 3.49 3.51h21.02a3.5 3.5 0 0 0 3.49-3.51V8.76a3.502 3.502 0 0
0-3.49-3.51H6.99A3.5 3.5 0 0 0 3.5 8.76v17.48zM5.25 8.753C5.25 7.787 6.038 7 7.012 7h20.976a1.767 1.767 0 0
1 1.762 1.753v17.494c0 .965-.788 1.753-1.762 1.753H7.012a1.767 1.767 0 0 1-1.762-1.753V8.753zm1.792
17.5H28v-5.419l-5.058-7.46-5.418 9.2-5.255-3.68L7 24.43l.042 1.825v-.002zM11.21 10.5a2.45 2.45 0 0 0-2.46
2.438 2.45 2.45 0 0 0 2.46 2.438 2.45 2.45 0 0 0 2.463-2.438A2.45 2.45 0 0 0 11.21 10.5z"
fill-rule="evenodd"/></svg>`;

const richIcons = [
	/* eslint-disable max-len */
	'<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="45" fill="#F5F5F5"/><rect width="45" height="45" rx="2" fill="#A5E7EB"/><g filter="url(#filter0_d_0_1)"><mask id="path-2-inside-1_0_1" fill="white"><path d="M9 41H36V12L28 5H9V41Z"/></mask><path d="M9 41H36V12L28 5H9V41Z" fill="white"/><path d="M28.5 12H27.75V12.75H28.5V12ZM27.75 6.5V12H29.25V6.5H27.75ZM28.5 12.75H35V11.25H28.5V12.75ZM36 41V42.5H37.5V41H36ZM9 41H7.5V42.5H9V41ZM9 5V3.5H7.5V5H9ZM28 5L28.9878 3.87113L28.5636 3.5H28V5ZM36 12H37.5V11.3193L36.9878 10.8711L36 12ZM36 39.5H9V42.5H36V39.5ZM10.5 41V5H7.5V41H10.5ZM9 6.5H28V3.5H9V6.5ZM34.5 12V41H37.5V12H34.5ZM27.0122 6.12887L35.0122 13.1289L36.9878 10.8711L28.9878 3.87113L27.0122 6.12887Z" fill="#333333" mask="url(#path-2-inside-1_0_1)"/></g><mask id="path-4-inside-2_0_1" fill="white"><path d="M21 23C21 21.8954 21.8954 21 23 21H31C32.1046 21 33 21.8954 33 23V29C33 30.1046 32.1046 31 31 31H23C21.8954 31 21 30.1046 21 29V23Z"/></mask><path d="M21 23C21 21.8954 21.8954 21 23 21H31C32.1046 21 33 21.8954 33 23V29C33 30.1046 32.1046 31 31 31H23C21.8954 31 21 30.1046 21 29V23Z" fill="#B6E3FC" stroke="#333333" stroke-width="2" mask="url(#path-4-inside-2_0_1)"/><mask id="path-5-outside-3_0_1" maskUnits="userSpaceOnUse" x="21" y="25" width="12" height="6" fill="black"><rect fill="white" x="21" y="25" width="12" height="6"/><path d="M23.9231 28.2857L22 30H32V27.7143L30.0769 26L26.6154 29.4286L23.9231 28.2857Z"/></mask><path d="M23.9231 28.2857L22 30H32V27.7143L30.0769 26L26.6154 29.4286L23.9231 28.2857Z" fill="#44D500"/><path d="M23.9231 28.2857L22 30H32V27.7143L30.0769 26L26.6154 29.4286L23.9231 28.2857Z" stroke="#333333" stroke-width="2" stroke-linejoin="round" mask="url(#path-5-outside-3_0_1)"/><circle cx="26" cy="25" r="1.5" fill="#FFD12D" stroke="#333333"/><rect x="13" y="13" width="12" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="17" width="19" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="21" width="6" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="25" width="6" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="29" width="6" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="33" width="16" height="2" rx="1" fill="#B4B4B4"/><defs><filter id="filter0_d_0_1" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/></filter></defs></svg>',
	'<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="45" fill="#F5F5F5"/><rect width="45" height="45" rx="2" fill="#A5E7EB"/><g filter="url(#filter0_d_0_1)"><mask id="path-2-inside-1_0_1" fill="white"><path d="M9 41H36V12L28 5H9V41Z"/></mask><path d="M9 41H36V12L28 5H9V41Z" fill="white"/><path d="M28.5 12H27.75V12.75H28.5V12ZM27.75 6.5V12H29.25V6.5H27.75ZM28.5 12.75H35V11.25H28.5V12.75ZM36 41V42.5H37.5V41H36ZM9 41H7.5V42.5H9V41ZM9 5V3.5H7.5V5H9ZM28 5L28.9878 3.87113L28.5636 3.5H28V5ZM36 12H37.5V11.3193L36.9878 10.8711L36 12ZM36 39.5H9V42.5H36V39.5ZM10.5 41V5H7.5V41H10.5ZM9 6.5H28V3.5H9V6.5ZM34.5 12V41H37.5V12H34.5ZM27.0122 6.12887L35.0122 13.1289L36.9878 10.8711L28.9878 3.87113L27.0122 6.12887Z" fill="#333333" mask="url(#path-2-inside-1_0_1)"/></g><rect x="13" y="35" width="19" height="2" rx="1" fill="#B4B4B4"/><rect x="22" y="22" width="5" height="3" fill="#FF2B2B"/><rect x="17" y="26" width="5" height="3" fill="#9FF577"/><rect x="27" y="29" width="4" height="3" fill="#9FF577"/><rect x="13.5" y="18.5" width="18" height="14" rx="0.5" stroke="#424242"/><path d="M17.5 19V32" stroke="#474747"/><path d="M22 19V32" stroke="#474747"/><path d="M31 22L14 22" stroke="#474747"/><path d="M31 25.5L14 25.5" stroke="#474747"/><path d="M31 29L14 29" stroke="#474747"/><path d="M27 19V32" stroke="#474747"/><rect x="13" y="10" width="12" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="14" width="12" height="2" rx="1" fill="#B4B4B4"/><defs><filter id="filter0_d_0_1" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/></filter></defs></svg>',
	'<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="45" fill="#F5F5F5"/><rect width="45" height="45" rx="2" fill="#A5E7EB"/><g filter="url(#filter0_d_0_1)"><mask id="path-2-inside-1_0_1" fill="white"><path d="M9 41H36V11L31 5H9V41Z"/></mask><path d="M9 41H36V11L31 5H9V41Z" fill="white"/><path d="M9 41H36V11L31 5H9V41Z" stroke="#333333" stroke-width="3" mask="url(#path-2-inside-1_0_1)"/></g><rect x="16" y="15" width="12" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="20" width="19" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="24" width="19" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="28" width="19" height="2" rx="1" fill="#B4B4B4"/><rect x="22" y="33" width="10" height="2" rx="1" fill="#B4B4B4"/><g filter="url(#filter1_d_0_1)"><path d="M35 3L36.9919 4.52723L39.4995 4.63769L40.0437 7.088L41.8937 8.78446L40.7355 11.0113L41.0622 13.5L38.7436 14.4614L37.3941 16.5778L35 15.824L32.6059 16.5778L31.2564 14.4614L28.9378 13.5L29.2645 11.0113L28.1063 8.78446L29.9563 7.088L30.5005 4.63769L33.0081 4.52723L35 3Z" fill="#FFD12D"/><path d="M35.4563 2.40481C35.1871 2.1984 34.8129 2.1984 34.5437 2.40481L32.7391 3.78835L30.4675 3.88842C30.1286 3.90334 29.8419 4.14391 29.7683 4.47508L29.2753 6.69485L27.5994 8.2317C27.3494 8.46098 27.2844 8.82955 27.441 9.13052L28.4901 11.1479L28.1942 13.4024C28.1501 13.7387 28.3372 14.0629 28.6505 14.1928L30.751 15.0638L31.9735 16.9811C32.1559 17.2671 32.5075 17.3951 32.8311 17.2932L35 16.6103L37.1689 17.2932C37.4925 17.3951 37.8441 17.2671 38.0265 16.9811L39.249 15.0638L41.3495 14.1928C41.6628 14.0629 41.8499 13.7387 41.8058 13.4024L41.5099 11.1479L42.559 9.13052C42.7156 8.82955 42.6506 8.46098 42.4006 8.2317L40.7247 6.69485L40.2317 4.47508C40.1581 4.14391 39.8714 3.90334 39.5325 3.88842L37.2609 3.78835L35.4563 2.40481Z" stroke="#333333" stroke-width="1.5" stroke-linejoin="round"/></g><path d="M32 11L34.5 13L38.5 8" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_d_0_1" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/></filter><filter id="filter1_d_0_1" x="26.6063" y="1.5" width="16.7875" height="17.578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/></filter></defs></svg>',
	'<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="45" fill="#F5F5F5"/><rect width="45" height="45" rx="2" fill="#A5E7EB"/><g filter="url(#filter0_d_0_1)"><mask id="path-2-inside-1_0_1" fill="white"><path d="M9 41H36V12L28 5H9V41Z"/></mask><path d="M9 41H36V12L28 5H9V41Z" fill="white"/><path d="M28.5 12H27.75V12.75H28.5V12ZM27.75 6.5V12H29.25V6.5H27.75ZM28.5 12.75H35V11.25H28.5V12.75ZM36 41V42.5H37.5V41H36ZM9 41H7.5V42.5H9V41ZM9 5V3.5H7.5V5H9ZM28 5L28.9878 3.87113L28.5636 3.5H28V5ZM36 12H37.5V11.3193L36.9878 10.8711L36 12ZM36 39.5H9V42.5H36V39.5ZM10.5 41V5H7.5V41H10.5ZM9 6.5H28V3.5H9V6.5ZM34.5 12V41H37.5V12H34.5ZM27.0122 6.12887L35.0122 13.1289L36.9878 10.8711L28.9878 3.87113L27.0122 6.12887Z" fill="#333333" mask="url(#path-2-inside-1_0_1)"/></g><rect x="13" y="23" width="8" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="19" width="9" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="27" width="19" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="31" width="19" height="2" rx="1" fill="#B4B4B4"/><rect x="13" y="15" width="11" height="2" rx="1" fill="#B4B4B4"/><mask id="path-9-inside-2_0_1" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.1747 20.3333C30.667 19.8768 30.975 19.2244 30.975 18.5C30.975 17.1193 29.8557 16 28.475 16C27.0943 16 25.975 17.1193 25.975 18.5C25.975 19.2244 26.2831 19.8768 26.7753 20.3333C26.7679 20.3364 26.7604 20.3395 26.753 20.3425C26.207 20.5687 25.7109 20.9002 25.293 21.318C24.8752 21.7359 24.5437 22.232 24.3176 22.7779C24.1553 23.1696 24.0496 23.5814 24.0028 24.001C23.9722 24.2755 24.1989 24.5 24.475 24.5L28.475 24.5H32.475C32.7512 24.5 32.9779 24.2755 32.9473 24.001C32.9005 23.5814 32.7947 23.1696 32.6325 22.7779C32.4063 22.232 32.0749 21.7359 31.657 21.318C31.2391 20.9002 30.7431 20.5687 30.1971 20.3425C30.1896 20.3395 30.1822 20.3364 30.1747 20.3333Z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M30.1747 20.3333C30.667 19.8768 30.975 19.2244 30.975 18.5C30.975 17.1193 29.8557 16 28.475 16C27.0943 16 25.975 17.1193 25.975 18.5C25.975 19.2244 26.2831 19.8768 26.7753 20.3333C26.7679 20.3364 26.7604 20.3395 26.753 20.3425C26.207 20.5687 25.7109 20.9002 25.293 21.318C24.8752 21.7359 24.5437 22.232 24.3176 22.7779C24.1553 23.1696 24.0496 23.5814 24.0028 24.001C23.9722 24.2755 24.1989 24.5 24.475 24.5L28.475 24.5H32.475C32.7512 24.5 32.9779 24.2755 32.9473 24.001C32.9005 23.5814 32.7947 23.1696 32.6325 22.7779C32.4063 22.232 32.0749 21.7359 31.657 21.318C31.2391 20.9002 30.7431 20.5687 30.1971 20.3425C30.1896 20.3395 30.1822 20.3364 30.1747 20.3333Z" fill="#FFBF9B"/><path d="M30.1747 20.3333L29.4947 19.6002L28.3447 20.6668L29.797 21.2593L30.1747 20.3333ZM26.7753 20.3333L27.1531 21.2593L28.6054 20.6668L27.4554 19.6002L26.7753 20.3333ZM26.753 20.3425L27.1356 21.2664L27.1357 21.2664L26.753 20.3425ZM25.293 21.318L26.0002 22.0251L26.0002 22.0251L25.293 21.318ZM24.3176 22.7779L23.3937 22.3952H23.3937L24.3176 22.7779ZM24.0028 24.001L24.9966 24.1119V24.1119L24.0028 24.001ZM24.475 24.5L24.475 23.5H24.475V24.5ZM28.475 24.5V25.5V24.5ZM32.9473 24.001L31.9534 24.1119V24.1119L32.9473 24.001ZM32.6325 22.7779L31.7086 23.1606L31.7086 23.1606L32.6325 22.7779ZM31.657 21.318L32.3641 20.6109L32.3641 20.6109L31.657 21.318ZM30.1971 20.3425L30.5798 19.4187L30.5798 19.4187L30.1971 20.3425ZM29.975 18.5C29.975 18.9346 29.7915 19.3249 29.4947 19.6002L30.8548 21.0665C31.5425 20.4286 31.975 19.5141 31.975 18.5H29.975ZM28.475 17C29.3035 17 29.975 17.6716 29.975 18.5H31.975C31.975 16.567 30.408 15 28.475 15V17ZM26.975 18.5C26.975 17.6716 27.6466 17 28.475 17V15C26.542 15 24.975 16.567 24.975 18.5H26.975ZM27.4554 19.6002C27.1586 19.3249 26.975 18.9346 26.975 18.5H24.975C24.975 19.5141 25.4076 20.4286 26.0953 21.0665L27.4554 19.6002ZM27.1357 21.2664C27.1413 21.2641 27.1471 21.2617 27.1531 21.2593L26.3976 19.4074C26.3886 19.4111 26.3795 19.4148 26.3703 19.4187L27.1357 21.2664ZM26.0002 22.0251C26.3252 21.7001 26.711 21.4423 27.1356 21.2664L26.3703 19.4187C25.703 19.6951 25.0967 20.1002 24.5859 20.6109L26.0002 22.0251ZM25.2415 23.1606C25.4173 22.736 25.6751 22.3501 26.0002 22.0251L24.5859 20.6109C24.0752 21.1216 23.6701 21.7279 23.3937 22.3952L25.2415 23.1606ZM24.9966 24.1119C25.033 23.7855 25.1153 23.4652 25.2415 23.1606L23.3937 22.3952C23.1954 22.8739 23.0662 23.3772 23.0089 23.8901L24.9966 24.1119ZM24.475 23.5C24.7172 23.5 25.0404 23.719 24.9966 24.1119L23.0089 23.8901C22.9039 24.8319 23.6806 25.5 24.475 25.5V23.5ZM28.475 23.5L24.475 23.5L24.475 25.5L28.475 25.5L28.475 23.5ZM32.475 23.5H28.475V25.5H32.475V23.5ZM31.9534 24.1119C31.9096 23.719 32.2329 23.5 32.475 23.5V25.5C33.2695 25.5 34.0462 24.8319 33.9411 23.8901L31.9534 24.1119ZM31.7086 23.1606C31.8348 23.4652 31.917 23.7855 31.9534 24.1119L33.9411 23.8901C33.8839 23.3772 33.7546 22.8739 33.5564 22.3952L31.7086 23.1606ZM30.9499 22.0251C31.2749 22.3501 31.5327 22.736 31.7086 23.1606L33.5564 22.3952C33.28 21.728 32.8748 21.1216 32.3641 20.6109L30.9499 22.0251ZM29.8144 21.2664C30.2391 21.4423 30.6249 21.7001 30.9499 22.0251L32.3641 20.6109C31.8534 20.1002 31.2471 19.6951 30.5798 19.4187L29.8144 21.2664ZM29.797 21.2593C29.8029 21.2617 29.8087 21.2641 29.8144 21.2664L30.5798 19.4187C30.5706 19.4148 30.5615 19.4111 30.5524 19.4074L29.797 21.2593Z" fill="black" mask="url(#path-9-inside-2_0_1)"/><defs><filter id="filter0_d_0_1" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/></filter></defs></svg>',
	'<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="icons/rich-table"><rect id="icon-bg" width="45" height="45" rx="2" fill="#F3D1F4"/><g id="table-border" filter="url(#filter0_d_1_775)"><path d="M8 40H37C38.1046 40 39 39.1046 39 38V8C39 6.89543 38.1046 6 37 6H31H7.9994C6.89484 6 6 6.89543 6 8V38C6 39.1046 6.89543 40 8 40Z" fill="white"/><path d="M37 39.25H8C7.30964 39.25 6.75 38.6904 6.75 38V8C6.75 7.30935 7.30934 6.75 7.9994 6.75H31H37C37.6904 6.75 38.25 7.30964 38.25 8V38C38.25 38.6904 37.6904 39.25 37 39.25Z" stroke="black" stroke-width="1.5"/></g><rect id="Rectangle 29" x="17" y="8" width="1" height="30" fill="#A8A8A8"/><rect id="Rectangle 35" x="37" y="19" width="1" height="29" transform="rotate(90 37 19)" fill="#A8A8A8"/><rect id="Rectangle 36" x="37" y="25" width="1" height="29" transform="rotate(90 37 25)" fill="#A8A8A8"/><rect id="Rectangle 37" x="37" y="31" width="1" height="29" transform="rotate(90 37 31)" fill="#A8A8A8"/><rect id="Rectangle 30" x="27" y="8" width="1" height="30" fill="#A8A8A8"/><rect id="Rectangle 34" x="37" y="13" width="1" height="29" transform="rotate(90 37 13)" fill="#6D6D6D"/><g id="Rectangle 31"><rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/><rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/></g><rect id="Rectangle 32" x="18" y="8" width="9" height="5" fill="#B6FCC5"/><rect id="Rectangle 33" x="28" y="8" width="9" height="5" fill="#FCB6E8"/></g><defs><filter id="filter0_d_1_775" x="6" y="6" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_775"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_775" result="shape"/></filter></defs></svg>',
	'<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="icons/todo"><rect id="icon-bg" width="45" height="45" rx="2" fill="#F3D1F4"/><g id="Group 1"><g id="Rectangle 55" filter="url(#filter0_d_1_1218)"><rect x="7" y="18" width="8" height="8" rx="1" fill="white"/><rect x="6.5" y="17.5" width="9" height="9" rx="1.5" stroke="#333333"/></g></g><g id="Group 2"><g id="Rectangle 55_2" filter="url(#filter1_di_1_1218)"><rect x="7" y="6" width="8" height="8" rx="1" fill="#83D400"/><rect x="6.5" y="5.5" width="9" height="9" rx="1.5" stroke="#333333"/></g><path id="Vector 2" d="M8.5 10.3889L10.1667 12L13.5 8.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><g id="Group 3"><g id="Rectangle 55_3" filter="url(#filter2_di_1_1218)"><rect x="7" y="30" width="8" height="8" rx="1" fill="#83D400"/><rect x="6.5" y="29.5" width="9" height="9" rx="1.5" stroke="black"/></g><path id="Vector 2_2" d="M8.5 34.3889L10.1667 36L13.5 32.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><rect id="Rectangle 28" x="21" y="7" width="18" height="2" rx="1" fill="#9B9B9B"/><rect id="Rectangle 29" x="21" y="11" width="14" height="2" rx="1" fill="#9B9B9B"/><rect id="Rectangle 30" x="21" y="19" width="18" height="2" rx="1" fill="#9B9B9B"/><rect id="Rectangle 31" x="21" y="23" width="14" height="2" rx="1" fill="#9B9B9B"/><rect id="Rectangle 32" x="21" y="31" width="18" height="2" rx="1" fill="#9B9B9B"/><rect id="Rectangle 33" x="21" y="35" width="14" height="2" rx="1" fill="#9B9B9B"/></g><defs><filter id="filter0_d_1_1218" x="6" y="17" width="11" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1218" result="shape"/></filter><filter id="filter1_di_1_1218" x="6" y="5" width="11" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1218" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_innerShadow_1_1218"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"/><feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1218"/></filter><filter id="filter2_di_1_1218" x="6" y="29" width="11" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1218" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_innerShadow_1_1218"/><feOffset dx="1" dy="1"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"/><feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1218"/></filter></defs></svg>',
	'<svg width="100" height="100" viewBox="0 0 100 100" fill="blue" xmlns="http://www.w3.org/2000/svg" stroke-width="7" stroke-linecap="round" stroke="#FF0202"><rect width="90" height="90" x="5" y="5"></rect><path d="M4.5 5L93 93.5"  /><path d="M93 5L4.5 93.5" /></svg>'
];

const ui = testUtils.createTestUIView( {
	icon20: '#icon20',
	icon40: '#icon40',
	icon60: '#icon60',
	iconRed: '#icon-red',
	iconBlueInherited: '#icon-blue-inherited',
	iconDirty: '#icon-dirty',
	iconViewBox: '#icon-view-box',
	iconsRich: '#icons-rich',
	iconsRichReference: '#icons-rich-reference'
} );

ui.icon20.add( getIcon( icon, 20 ) );
ui.icon40.add( getIcon( icon, 40 ) );
ui.icon60.add( getIcon( icon, 60 ) );

ui.iconRed.add( getIcon( icon, 20, 'red' ) );
ui.iconBlueInherited.add( getIcon( icon, 20 ) );

ui.iconDirty.add( getIcon( iconDirty, 100, 'green' ) );
ui.iconViewBox.add( getIcon( iconViewBox, 100, 'green' ) );

for ( const richIcon of richIcons ) {
	ui.iconsRich.add( getIcon( richIcon, null, null, false ) );

	// The reference to compare
	document.getElementById( 'icons-rich-reference' )
		.appendChild( new DOMParser().parseFromString( richIcon, 'image/svg+xml' ).firstChild );
}

function getIcon( content, size, color, isColorInherited = true ) {
	const iconView = new IconView();

	iconView.render();
	iconView.content = content;

	if ( size ) {
		iconView.element.style.width = `${ size }px`;
		iconView.element.style.height = `${ size }px`;
	}

	if ( color ) {
		iconView.element.style.color = color;
	}

	iconView.isColorInherited = isColorInherited;

	return iconView;
}
