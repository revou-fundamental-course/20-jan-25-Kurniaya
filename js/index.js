
//fungsi untuk menghitung bmi
function calculate(){
    //mengambil nilai dari input
    const weight = parseFloat(document.getElementById("berat-badan-input").value);
    const height = parseFloat(document.getElementById("tinggi-badan-input").value)/100; //Mengubah cm ke m
    const age = parseInt(document.getElementById("usia-input").value);
    const gender = document.querySelector("input[name='gender-input']:checked"); 

    //validasi input
    if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender){
        alert("Silahkan masukkan data Anda dengan benar.");
        return;
    } //untuk memastikan data yang diminta diisi semua

    //menghitung BMI
    const bmi = weight / (height * height);
    const resultBMI = document.getElementById("result-bmi");
    const infoHasil = document.getElementById("info");

    //menampilkan hasil bmi
    resultBMI.textContent = bmi.toFixed(2) //untuk membatasi 2 desimal
    infoHasil.textContent = getBMICategory(bmi); //menampilkan kategori BMI
}

//menentukan kategori
let status =" ";
function getBMICategory(bmi){
    if (bmi < 18.5) {
        return "Kekurangan berat badan";
    }else if (bmi >= 18.5 && bmi < 24.9){
        return "Normal(ideal)";
    }else if(bmi >= 25 && bmi < 29.9){
        return "Kelebihan berat badan";
    }else if (bmi >= 30){
        return "Kegemukan(Obesitas)";
    }
}

// fungsi untuk mereset form
function resetForm(){
    document.getElementById("berat-badan-input").value = ""; //mengatur nilainya menjadi kosong
    document.getElementById("tinggi-badan-input").value = ""; //mengatur nilainya menjadi kosong
    document.getElementById("usia-input").value = ""; //mengatur nilainya menjadi kosong
    document.querySelector("input[name='gender-input']:checked").checked = false; //menghapus pilihan untuk jenis kelamin
    document.getElementById("result-bmi").textContent = ""; //mengatur hasil BMI ke default
    document.getElementById("info").textContent = ""; //mengatur info hasil ke default
}

//fungsi untuk mendownload hasil BMI
function download(){
    //mengambil nilai hasil BMI dan informasi dari elemen
    const result = document.getElementById("result-bmi").textContent; //nilai bmi
    const info = document.getElementById("info").textContent; //nilai info
    const blob = new Blob([`Hasil BMI: ${result}\n${info}`], { type: "text/plain" }); //untuk download dokumen
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "hasil_bmi.txt"; //nama file yang diunduh
    link.click();
}

//fungsi untul konsultasi
function konsul(){
    window.open("https://prodiadigital.com/id/health-plan?gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_FlvJcrwP8htapxbwkRVBxHaZURmHXxu3rnQ8F3fUWpRrKqHow5Q3kaAjDoEALw_wcB");
}

//fungsi untuk registrasi
function regist(){
    window.open("https://prodiadigital.com/id/health-plan?gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_FlvJcrwP8htapxbwkRVBxHaZURmHXxu3rnQ8F3fUWpRrKqHow5Q3kaAjDoEALw_wcB");
}