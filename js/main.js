$(document).ready(function(){
  // SVG CSS color adjusting
  $('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
});

$( function()
{
//alert( "here" );
	$( window ).resize( _refresh );
	_refresh();
} );

function _refresh()
{
	if ( _isWide() )
	{
		_showMenu( false );
		$( ".tcContentPanel" ).show();
		$( ".tcMenuPanel" ).show();
	}
	else
	{
		//
		if ( _getCurrentPageIndex() >= 0 )
		{
			_showArrows( true );
		}
		else
		{
			_showArrows( false );
		}
	}
	
	// background position
	var $contentHeader = $( ".tcContentHeader" );
	var $contentPanel = $( ".tcContentPanel" );
	
	var nHeaderHeight = $contentHeader.outerHeight();
	
	$contentPanel.css( "background-position-y", nHeaderHeight + "px" );
	
	nHeaderHeight = $( ".tcNarrowModeHeader" ).outerHeight();
	$( ".tcNarrowModeHeaderSpacer" ).css( "height", nHeaderHeight + "px" );
	var nMenuHeight = $( window ).height() - nHeaderHeight;
//	$( "#tcNarrowModeMenu" ).css( "height", nMenuHeight + "px" );
	
//	$( ".tcMain" ).css( "min-height", nMenuHeight + "px" );
//	setTimeout( refreshMenuSpacer, 0 );
}

function _isWide()
{
//Log.debug( "AcgApp._isEnhanced" );
	return ( _getAppliedCss() == "wide" );
}

function _getAppliedCss()
{
//alert( "getAppliedCss" );
//	var sContent = window.getComputedStyle( document.body, ':after' ).getPropertyValue( 'content' );
	var nWeight = parseInt( window.getComputedStyle( $( "#cssCheck" ).get(0), '' ).getPropertyValue( 'font-weight' ) );
//alert( "nWeight:" + nWeight );
	switch ( nWeight )
	{
		case 800 :
			return "narrow";
		break;
		case 900 :
			return "wide";
		break;
	}
	return null;
}

function _toggleMenu()
{
	_showMenu( !( $( "#tcNarrowModeMenu" ).is( ":visible" ) ) );
}

function _showMenu( bShow )
{
	if ( bShow )
	{
		$( "#tcNarrowModeMenu" ).show();
//		var nMenuHeight = $( "#brandAndNav" ).height();
//		$( ".main" ).hide();
		$( ".tcContentPanel" ).hide();
	}
	else
	{
		$( "#tcNarrowModeMenu" ).hide();
//		$( ".tcMain" ).show();
		$( ".tcContentPanel" ).show();
	}
}

//var g_aPages = [ "/", "/getting-started.html", "/downloads.html", "/docs", "/contrib", "/news", "/about.html", "/legalese.html", "/docs/member-faq.html", "/coc.html" ];
var g_aPages = [ "/", "/getting-started.html", "/downloads.html", "/docs", "/contrib", "/news", "/about.html", "/legalese.html", "/faq.html", "/coc.html" ];

function _getCurrentPage()
{
	var sPath = location.pathname;
	sPath = sPath.replace( /^(.+)\/$/, "$1" );	// remove trailing '/'
	
//	var iStart = ( sPath.lastIndexOf ( "/" ) >= 0 ) ? sPath.lastIndexOf ( "/" ) : 0
	var iStart = 0;
	var iEnd = ( sPath.lastIndexOf ( "?" ) >= 0 ) ? sPath.lastIndexOf ( "?" ) : -1;
	
	var sReturn = ( iEnd >= 0 ) ? sPath.substring( iStart, iEnd ) : sPath.substring( iStart );
	
	return sReturn;
}

function _getCurrentPageIndex()
{
	var sCurrentPage = _getCurrentPage();
	for ( var i = 0; i < g_aPages.length; i++ )
	{
		if ( g_aPages[ i ] == sCurrentPage ) return i;
	}
	return -1;
}

function _setPage( sPage )
{
//alert( "setPage:" + sPage );
	window.location = sPage;
}

function _gotoNextPage()
{
//alert( "gotoNextPage" );
	var iCurrentPageIndex = _getCurrentPageIndex();
	iCurrentPageIndex = (iCurrentPageIndex+1) % g_aPages.length;
//alert( "iCurrentPageIndex:" + iCurrentPageIndex );
	_setPage( g_aPages[ iCurrentPageIndex ] );
}

function _gotoPrevPage()
{
//alert( "gotoPrevPage" );
	var iCurrentPageIndex = _getCurrentPageIndex();
	iCurrentPageIndex--;
	if ( iCurrentPageIndex < 0 ) iCurrentPageIndex = g_aPages.length - 1;
	_setPage( g_aPages[ iCurrentPageIndex ] );
}

function _showArrows( bShow )
{
	if ( bShow )
	{
		$( ".tcNavBarArrowLeft" ).show();
		$( ".tcNavBarArrowRight" ).show();
	}
	else
	{
		$( ".tcNavBarArrowLeft" ).hide();
		$( ".tcNavBarArrowRight" ).hide();
	}
}
