/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
jQuery(function($) {
    $.datepicker.regional['ct'] = {
        closeText: 'Cerrar',
        prevText: '',
        nextText: '',
        currentText: 'Avui',
        monthNames: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny',
            'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
        ],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun',
            'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'
        ],
        dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
        dayNamesShort: ['Diu', 'Dil', 'Dim', 'Dim', 'Dij', 'Div', 'Dis'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ct']);
});