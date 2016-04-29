# superlight-popup

This is a super basic and super lightweight popup script written using a combination of jquery and javascript.

## Usage

1. Just add the class `.popup` to any link element you want to use to open a popup. Set the href of that element to the id of the div you want to open. i.e. `<a href="#popup-bpx" class="popup">Click to open</a>`
2. Then just create a div anywhere on the page with that ID and add `style="display: none;"` as in inline style to that div. i.e. `<div id="popup-box" style="display: none;">Here is some popup content</div>`
3. The script will handle the rest.
4. Don't forget to include the `popup-styles.css` file!

### Alternative animations

You can include animate.css and alter the animation classes to use fancier animations. I have included fadeIn and fadeOut by default with a animation duration of 300ms
