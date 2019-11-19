function date_count(year,month,day) {
    var this_day_date = new Date(year, month-1, day);
    var this_day = formatDate(this_day_date, "YYYYMMDD");
    var next_day_date = new Date(year, month-1, day + 1);
    var next_day = formatDate(next_day_date, "YYYYMMDD");

    var mode = "preusers&from=" + this_day + "&to=" + next_day;
    console.log(mode);
    $.getJSON('/IjmBxhM3ESOb/preuser/json.php?mode=' + mode, function(data) {
            console.log(data);  
        });

        function formatDate(date, format) {
            if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
            format = format.replace(/YYYY/g, date.getFullYear());
            format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
            format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
            format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
            format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
            format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
            if (format.match(/S/g)) {
                var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
                var length = format.match(/S/g).length;
                for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
            }
            return format;
        }
    }