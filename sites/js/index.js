$(function() {
	$("#q1").click(function() {
		var a = $("input").val()
		var pcSite = a + '.html';
		var mSite = pcSite.replace(/www/g, 'm')
		var mipSite = pcSite.replace(/www/g, 'mip')
		$("a").attr('href', pcSite);
		$(".m input").attr('value', mSite)
		$(".mip input").attr('value', mipSite)
	});
})