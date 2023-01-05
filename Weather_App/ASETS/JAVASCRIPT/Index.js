// $(document).on("click", "#btn", function () {
//   let value = $('#searching').val();
//   alert(value);
// });
//  let inputvalue=document.querySelector('#searching');

// $(document).ready(function(){
//     $('li').click(function(){
// // $li = $('li a').text();
// //     alert($li);
// $id = $(``).attr('id');
// alert($id)
//     })
// })

let place = document.querySelectorAll(".place");
let date = new Date();
let url
let key = "ea63b881f6cd33903b04294e4b0418b8"

$gel=$('.City_Name h6 span').text(date);
// $gel()


sucess=(position)=>{
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}`
  get_data()

}
navigator.geolocation.getCurrentPosition(sucess)
console.log(date)
// let api_place


place.forEach((place)=>{
  place.addEventListener("click",()=>{
    url = `https://api.openweathermap.org/data/2.5/weather?q=`+place.innerText +`&appid=${key}`
    get_data()
   })
})

$btn = $("#btn");
$inputvalue = $("#searching");
$($btn).click(function () {
  val = $inputvalue.val();
  // alert($val);
  url = `https://api.openweathermap.org/data/2.5/weather?q=`+val +`&appid=${key}`
  get_data()


});


get_data=()=>{
  fetch(
    url
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $name = data["name"];
      $temp = data["main"]["temp"];
      $id = data["weather"][0]["id"];
      $temp -= 273;
      $temp = parseInt($temp) + 1;
      $(".value ").text($temp); // set temp value
      $(".City_Name h2").text($name);
      if ($id == 200 || $id <= 232) {
        
        $(".container-fluid").css({
          background: "url(ASETS/IMAGE/Thunder_1.gif)",
          "background-size": "100% 100%",
        });
        $(".img img").attr("src", "ASETS/IMAGE/thunder_sky.png");
        $(".img h6 span").text("Thunder Sky");

      } else if ($id == 300 || $id <= 321) {

        $(".container-fluid").css({
          background: "url(ASETS/IMAGE/rain_2.gif)",
          "background-size": "100% 100%",
        });
        // $('.img img').attr('src','/ASETS/IMAGE/thunder_sky.png');
        // $('.img h6 span').text("");
      } else if ($id == 500 || $id <= 531) {

        $(".container-fluid").css({
          background: "url(ASETS/IMAGE/rain-1.gif)",
          "background-size": "100% 100%",
        });

      } else if ($id == 600 || $id <= 622) {

        $(".container-fluid").css({
          background: "url(ASETS/IMAGE/snow_2.gif)",
          "background-size": "100% 100%",
        });
        $(".img img").attr("src", "ASETS/IMAGE/snow_sky.png");
        $(".img h6 span").text("Snow Sky");

      } else if ($id == 701 || $id <= 781) {

        $(".container-fluid").css({
          background: "url(ASETS/IMAGE/fog_1.gif)",
          "background-size": "100% 100%",
        });
        $(".img img").attr("src", "ASETS/IMAGE/foggy_sky.png");
        $(".img h6 span").text("Foggy Sky");
        $('.head h5').css('color','black')

      } else if ($id == 800) {

        $(".container-fluid").css({
          background: "url(ASETS/IMAGE/clear_sky_2.gif)",
          // background:'url(/)'
          "background-size": "100% 100%",
        });
        $(".img img").attr("src", "ASETS/IMAGE/clear_sky_icon.png");
        $(".img h6 span").text("Clear Sky");

      } else if ($id == 801 || $id <= 804) {

        $(".container-fluid").css({
          background: "url(ASETS/IMAGE/cloud_1.gif)",
          "background-size": "100% 100%",
        });
        $(".img img").attr("src", "ASETS/IMAGE/cloudy_sky_icon.png");
        $(".img h6 span").text("cloudy Sky");

      }

      console.log($temp);
      console.log($name);
      console.log($id);
    })
    .catch((err) => alert("Enter Valid City Name"));
}