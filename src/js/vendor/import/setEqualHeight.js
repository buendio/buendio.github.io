window.setEqualHeight = function(columns, parent) {
    let k = 1,
        tallestColumn = 0,
        count = Math.round(parent.outerWidth() / columns.first().outerWidth());

    columns.each(function() {
        let $this = $(this),
            currentHeight = $this.outerHeight();

        k++;

        if (currentHeight > tallestColumn) {
            tallestColumn = currentHeight;
        }

        $this.outerHeight(tallestColumn);

        if (count / k === 1) {
            k = 0;
            tallestColumn = 0;
        }
    });
};