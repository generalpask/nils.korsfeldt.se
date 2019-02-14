(function() {
    document.getElementById("0300h").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/0300h"
    })
    document.getElementById("samplegallery").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/samplegallery"
    })
    document.getElementById("skelly").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/skelly"
    })
}).call(this);
