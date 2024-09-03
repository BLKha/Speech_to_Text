const clickBtn = document.getElementById("click_to_convert");
const convert = document.getElementById("convert_text");
const languageSelect = document.getElementById("language");

    clickBtn.addEventListener('click',function(){
        var speech = true;
        // SpeechRecognition là của Web Speech API cho phép các ứng dụng web nhận dạng và xử lý giọng nói của người dùng 
        window.SpeechRecognition = window.webkitSpeechRecognition;
        // tạo ra đối tượng recontion từ SpeechRecognitio()
        const recontion = new SpeechRecognition();
        recontion.lang= languageSelect.value;
        // Khi interimResults = true, trình nhận diện giọng nói sẽ trả về các kết quả tạm thời khi người dùng đang nói.
        // Khi interimResults = false, kết quả chỉ được trả về khi người dùng đã hoàn toàn kết thúc câu nói và trình nhận diện giọng nói xác định được kết quả cuối cùng
        recontion.continuous=true;
        recontion.interimResults = true;

        recontion.addEventListener('result',e=>{
            const transcript = Array.from(e.results).map(result => result[0]).map(result=> result.transcript).join('');
            convert.value=transcript;
            convert.innerHTML=transcript;
            convert.scrollTop = convert.scrollHeight;       
        });

            if(speech == true){
                recontion.start();
            }


  
 
    })

 