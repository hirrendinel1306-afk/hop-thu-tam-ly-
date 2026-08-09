document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // HỘP THƯ TÂM LÝ - JAVASCRIPT
    // ==============================

    const startButton = document.querySelector(".btn-primary");
    const exploreButton = document.querySelector(".btn-secondary");

    // ------------------------------
    // 1. TẠO KHU VỰC TÂM SỰ
    // ------------------------------

    const sharingSection = document.createElement("section");

    sharingSection.id = "sharing-area";

    sharingSection.innerHTML = `
        <div class="sharing-box">

            <div class="sharing-header">
                <span class="sharing-icon">💚</span>
                <h2>Góc tâm sự</h2>
                <p>
                    Bạn có thể viết ra những điều đang khiến bạn suy nghĩ.
                    Không cần phải viết thật hay, chỉ cần chân thành.
                </p>
            </div>

            <textarea
                id="sharing-input"
                placeholder="Hôm nay bạn muốn chia sẻ điều gì?"
                maxlength="1000"
            ></textarea>

            <div class="sharing-bottom">

                <span id="char-count">0/1000</span>

                <button id="send-sharing" type="button">
                    🌿 Gửi tâm sự
                </button>

            </div>

            <div id="sharing-response"></div>

        </div>
    `;

    document.body.appendChild(sharingSection);


    // ------------------------------
    // 2. CSS CHO KHU VỰC TÂM SỰ
    // ------------------------------

    const dynamicStyle = document.createElement("style");

    dynamicStyle.textContent = `
        #sharing-area {
            display: none;
            padding: 80px 20px;
            background: #f4fffa;
        }

        .sharing-box {
            max-width: 850px;
            margin: auto;
            background: white;
            padding: 40px;
            border-radius: 28px;
            box-shadow: 0 15px 50px rgba(0,0,0,0.08);
        }

        .sharing-header {
            text-align: center;
            margin-bottom: 25px;
        }

        .sharing-icon {
            font-size: 42px;
        }

        .sharing-header h2 {
            font-size: 32px;
            margin: 10px 0;
            color: #123c35;
        }

        .sharing-header p {
            color: #65736f;
            line-height: 1.7;
        }

        #sharing-input {
            width: 100%;
            min-height: 180px;
            padding: 18px;
            border: 2px solid #dceee8;
            border-radius: 18px;
            resize: vertical;
            font-family: Poppins, sans-serif;
            font-size: 15px;
            box-sizing: border-box;
            outline: none;
        }

        #sharing-input:focus {
            border-color: #10b981;
        }

        .sharing-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            gap: 15px;
        }

        #char-count {
            color: #7b8985;
            font-size: 14px;
        }

        #send-sharing {
            border: none;
            background: #10b981;
            color: white;
            padding: 13px 24px;
            border-radius: 12px;
            font-family: Poppins, sans-serif;
            font-weight: 600;
            cursor: pointer;
        }

        #send-sharing:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }

        #sharing-response {
            display: none;
            margin-top: 25px;
            padding: 22px;
            background: #effcf6;
            border-radius: 18px;
            color: #24443c;
            line-height: 1.8;
        }

        .response-title {
            font-weight: 700;
            color: #0a9f70;
            margin-bottom: 8px;
        }

        @media (max-width: 600px) {

            .sharing-box {
                padding: 25px 18px;
            }

            .sharing-header h2 {
                font-size: 26px;
            }

            .sharing-bottom {
                flex-direction: column;
                align-items: stretch;
            }

            #send-sharing {
                width: 100%;
            }
        }
    `;

    document.head.appendChild(dynamicStyle);


    // ------------------------------
    // 3. NÚT "BẮT ĐẦU TÂM SỰ"
    // ------------------------------

    if (startButton) {

        startButton.addEventListener("click", function (event) {

            event.preventDefault();

            sharingSection.style.display = "block";

            sharingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            setTimeout(function () {
                document.getElementById("sharing-input").focus();
            }, 600);

        });

    }


    // ------------------------------
    // 4. NÚT "KHÁM PHÁ"
    // ------------------------------

    if (exploreButton) {

        exploreButton.addEventListener("click", function (event) {

            event.preventDefault();

            const features = document.querySelector(".features");

            if (features) {

                features.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            } else {

                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                });

            }

        });

    }


    // ------------------------------
    // 5. ĐẾM KÝ TỰ
    // ------------------------------

    const input = document.getElementById("sharing-input");
    const charCount = document.getElementById("char-count");

    input.addEventListener("input", function () {

        charCount.textContent =
            input.value.length + "/1000";

    });


    // ------------------------------
    // 6. GỬI TÂM SỰ
    // ------------------------------

    const sendButton = document.getElementById("send-sharing");
    const response = document.getElementById("sharing-response");

    sendButton.addEventListener("click", function () {

        const message = input.value.trim();

        if (message === "") {

            response.style.display = "block";

            response.innerHTML = `
                <div class="response-title">
                    🌱 Viết một chút nhé
                </div>

                Bạn có thể bắt đầu bằng một điều nhỏ nhất
                đang xuất hiện trong suy nghĩ của mình.
            `;

            return;

        }


        // Phản hồi đồng hành cơ bản

        response.style.display = "block";

        response.innerHTML = `
            <div class="response-title">
                💚 Cảm ơn bạn đã chia sẻ.
            </div>

            Những điều bạn đang cảm nhận đều đáng được
            lắng nghe. Hãy thử cho bản thân một chút thời gian
            để nhìn lại điều gì đang khiến bạn bận tâm nhất.

            <br><br>

            <strong>Một bước nhỏ bạn có thể thử:</strong>
            hãy chọn một việc trong hôm nay mà bạn có thể
            chủ động giải quyết trước, thay vì cố gắng xử lý
            tất cả cùng lúc.

            <br><br>

            Bạn không cần phải giải quyết mọi thứ ngay lập tức.
            Hãy đi từng bước một nhé 🌿
        `;

        response.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });
// ------------------------------
// 7. MENU ĐIỀU HƯỚNG
// ------------------------------

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const text = link.textContent.trim();

        if (text === "Trang chủ") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

        else if (text === "Tâm sự") {

            const sharing = document.querySelector("#sharing-area");

            if (sharing) {
                sharing.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }

        else if (text === "Góc kỹ năng") {

            const features = document.querySelector(".features");

            if (features) {
                features.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }

        else if (text === "Nhật ký") {

            const diary = document.querySelector("#diary-area");

            if (diary) {
                diary.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }

        else if (text === "Liên hệ") {

            const footer = document.querySelector("footer");

            if (footer) {
                footer.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }

    });

});
   
    // ------------------------------
    // 8. HOÀN TẤT KẾT NỐI
    // ------------------------------

    console.log(
        "🌿 Hộp thư tâm lý - JavaScript đã hoạt động."
    );

});
