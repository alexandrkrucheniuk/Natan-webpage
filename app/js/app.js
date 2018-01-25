$("a[href='#top']").click(function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    document.getElementById("firstNameSignup").focus();
    return false;
});