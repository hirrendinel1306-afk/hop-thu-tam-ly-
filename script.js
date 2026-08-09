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
// ==============================
// GÓC KỸ NĂNG - HIỂN THỊ NỘI DUNG
// ==============================

const skillCards = document.querySelectorAll(".skill-card");

const skillContents = {
    "Áp lực học tập": `
        <h3>📚 Áp lực học tập</h3>
        <p>
            Khi cảm thấy quá nhiều bài vở, điểm số hoặc kỳ vọng khiến bạn mệt mỏi,
            hãy thử chia nhỏ công việc thành từng bước.</p>
        <p><strong>Một bước nhỏ bạn có thể thử:</strong>
        Chọn một việc quan trọng nhất hôm nay và hoàn thành nó trước.</p>
        <p>Đừng cố giải quyết tất cả cùng một lúc. Bạn có thể tiến từng bước nhỏ 🌱</p>
    `,

    "Gia đình": `
        <h3>👨‍👩‍👧 Gia đình</h3>
        <p>
            Những khác biệt với gia đình đôi khi khiến bạn khó nói ra cảm xúc của mình.
            Hãy thử lựa chọn một thời điểm cả hai bên đều bình tĩnh để chia sẻ.</p>
        <p><strong>Gợi ý:</strong> Nói về cảm xúc của bản thân thay vì chỉ nói
        người khác đã làm sai điều gì.</p>
    `,

    "Bạn bè": `
        <h3>🤝 Bạn bè</h3>
        <p>
            Tình bạn có thể mang đến rất nhiều niềm vui nhưng cũng có lúc khiến bạn
            buồn hoặc thất vọng.</p>
        <p>
            Hãy cho bản thân một chút thời gian để hiểu điều mình thực sự mong muốn
            trong mối quan hệ đó.</p>
    `,

    "Kỹ năng thích ứng": `
        <h3>🌱 Kỹ năng thích ứng</h3>
        <p>
            Thay đổi là một phần tự nhiên của cuộc sống. Khi hoàn cảnh thay đổi,
            bạn có thể bắt đầu bằng việc quan sát, hiểu vấn đề và lựa chọn cách
            phản ứng phù hợp.</p>
        <p>
            <strong>Mẹo nhỏ:</strong> Tập trung vào điều bạn có thể kiểm soát
            thay vì cố kiểm soát tất cả mọi thứ.</p>
    `,

    "Định hướng tương lai": `
        <h3>🎯 Định hướng tương lai</h3>
        <p>
            Bạn không nhất thiết phải biết chính xác tương lai của mình ngay hôm nay.</p>
        <p>
            Hãy bắt đầu bằng việc tìm hiểu điều mình thích, điểm mạnh của bản thân
            và những mục tiêu nhỏ trong thời gian gần.</p>
        <p>
            Mỗi bước nhỏ hôm nay đều có thể giúp bạn hiểu bản thân hơn 🌿</p>
    `
};

skillCards.forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", function () {

        const title = this.querySelector("h3").textContent.trim();

        let detailBox = document.querySelector(".skill-detail");

        if (!detailBox) {
            detailBox = document.createElement("div");
            detailBox.className = "skill-detail";

            document.querySelector(".skill-grid").after(detailBox);
        }

        detailBox.innerHTML =
            skillContents[title] ||
            "<p>Đang cập nhật nội dung cho kỹ năng này 🌱</p>";

        detailBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});
    console.log(
        "🌿 Hộp thư tâm lý - JavaScript đã hoạt động."
    );

});
