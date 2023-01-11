// this is the code which will be injected into a given page...

(function() {

    for (let i = 0; i < 11; i++) {
        document.getElementById("SUR_ders_" + i + "_5").checked = true;
    }
    for (let i = 0; i < 3; i++) {
        document.getElementById("SUR_ogretim_" + i + "_5").checked = true;
    }
    for (let i = 0; i < 14; i++) {
        document.getElementById("SUR_hoca_" + i + "_5").checked = true;
    }
    document.getElementById("SUR_kisisel_gorus").value = "Yok.";

	alert('Surver Solvey Works :)');

})();

/*for (let i = 50; i < 70; i++) {
    var elements = document.getElementsByName("SUR[Int][26][" + i + "][]");
    elements[4].checked = true;
} MÜDEK Ders Değerlendirme*/