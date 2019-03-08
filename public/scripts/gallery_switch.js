(function() {
    document.getElementById("three_am").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/three_am"
    })
    document.getElementById("samplegallery").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/samplegallery"
    })
    document.getElementById("skelly").addEventListener("click", function() {
        document.getElementById("galleries-iframe").src="/skelly"
    })
}).call(this);
