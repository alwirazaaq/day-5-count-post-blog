// global data
let datas = [
    {
      endDate: "2020-10-20",
      imagesProject: "image/kodok.jpg",
      namaProject: "Katak Afrika Menjanjikan",
      next: '<li><img src="image/images.png" alt="" width="50px" height="50" /></li>',
      node: '<li><img src="image/mike.jpg" alt="" width="50px" height="50" /></li>',
      react: "",
      startDate: "2020-10-10",
      textAreaInput: "Diterjemahkan dari bahasa Inggris-Katak adalah anggota dari kelompok amfibi tak berekor yang beragam dan sebagian besar karnivora, yang menyusun ordo Anura",
      type: "",
      link: "blogkodok.html",
    },
  ];
  
  // function getData to tigger submit buttonn
  function getData(event) {
    event.preventDefault();
  
    let namaProject = document.getElementById("namaProject").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let textAreaInput = document.getElementById("text-area-input").value;
    let imagesProject = document.getElementById("img-project").files;
  
    // getting values thecnology
    let node = document.getElementById("checkBoxNode").checked ? document.getElementById("checkBoxNode").value : false;
    let react = document.getElementById("checkBoxReact").checked ? document.getElementById("checkBoxReact").value : false;
    let next = document.getElementById("checkBoxNext").checked ? document.getElementById("checkBoxNext").value : false;
    let type = document.getElementById("checkBoxType").checked ? document.getElementById("checkBoxType").value : false;
  
    //  validation input
    if (namaProject == "") {
      alert("harap masukan nama");
    } else if (startDate == "") {
      alert("harap masukan tanggal mulai project");
    } else if (endDate == "") {
      alert("harap masukan tanggal berakhir project");
    } else if (textAreaInput == "") {
      alert("harap masukan penjelsan project anda");
    } else if (node == false && react == false && next == false && type == false) {
      alert("harap pilih salah satu");
    } else if (imagesProject.length == 0) {
      alert("harap masukan gambar anda");
    } else {
      // create url object to image input
      imagesProject = URL.createObjectURL(imagesProject[0]);
  
      node = node != false ? `<li><img src="${node}" alt="" width="50px" height="50" /></li>` : "";
      next = next != false ? `<li><img src="${next}" alt="" width="50px" height="50" /></li>` : "";
      react = react != false ? `<li><img src="${react}" alt="" width="50px" height="50" /></li>` : "";
      type = type != false ? `<li><img src="${type}" alt="" width="50px" height="50" /></li>` : "";
  
      // created blog object
      let blogData = {
        namaProject,
        startDate,
        endDate,
        textAreaInput,
        imagesProject,
      };
  
      // push blog data to global object
      datas.push(blogData);
      // calling function showdata
      console.log(datas);
      // calling function showData
      showData();
    }
  }
  
  // global render data
  window.onload = function () {
    if (datas.length != 0) {
      showData();
    }
  };
  
  // function showData
  function showData() {
    document.getElementById("all-card").innerHTML = "";
    
    
    for (let index = 0; index < datas.length; index++) {
      document.getElementById("all-card").innerHTML += ` 
      <div class="card-dinamis" id="dinamisCard">
              <div class="image" id="imageProject"><img src="${datas[index].imagesProject}" alt="" /></div>
              <div class="header-blog">
                <h1 class="judul-blog"><a href="${datas[index].link}">${datas[index].namaProject}</a></h1>
              </div>
              <div class="deskrip-waktu" >
                <p>3 bulan</p>
              </div>
              <div class="article-blog">
                <p>${datas[index].textAreaInput}</p>
              </div>
              <div class="technology">
                <ul>
                 ${datas != false ? datas[index].node : ""}
                 ${datas != false ? datas[index].react : ""}
                  ${datas != false ? datas[index].next : ""}
                  ${datas != false ? datas[index].type : ""}
                  </ul>
              
            </div>
            </div>
            `;
    }
  }