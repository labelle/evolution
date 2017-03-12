// https://github.com/labelle/evo-code-block

$(document).ready(function() {
    // Grabs all the blocks
    var codeBlocks = document.getElementsByClassName("evo-codeblock");
    // Checks for blocks
    if (codeBlocks.length > 0 ) {
        // Loops through each block
        $('.evo-codeblock').each(function() {
            // Grabs the identifier based on being first in order.
            var identifier = $(this).attr('data-identifier');
            // Get the html for the div with matching identifier
            var html = $('[data-identifier=' + identifier + ']').html().replace(/=""/g,""); 
            // Fills the html in the target.
            $('[data-target=' + identifier + '] pre code').text(html);
        });
    }

    // Hides or reveals the code block 
    $('.evo-multiline-reveal-button').on('click', function() {
        // This gets the hidden code block in the same div as the button
        var block = $(this).parent('div').find('.hidden-block');
        // This toggles between hidding and showing the box.
        if( block.hasClass('hidden-block') )  {
            // Show the box.
            $(this).parent('div').find('.hidden-block').removeClass('hidden-block').addClass('revealed');
            $(this).text('Hide code');
            if( $(this).hasClass('evo-remove-this')) {
                $(this).remove();
            }
        } else {
            // Hide the box.
            $(this).parent('div').find('.revealed').removeClass('revealed').addClass('hidden-block');
            $(this).text('View code');
        }
    });

});
