document.addEventListener("DOMContentLoaded", () => {

```
/* =========================================================
   1. CÁC PHẦN TỬ CHÍNH
   ========================================================= */

const startButton = document.querySelector(".btn-primary");
const exploreButton = document.querySelector(".btn-secondary");

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

const loginButton = document.getElementById("login-button");


/* =========================================================
   2. TẠO KHU VỰC TÂM SỰ
   ========================================================= */

const sharingSection = document.createElement("section");

sharingSection.id = "sharing-area";
sharingSection.className = "sharing-section";

sharingSection.innerHTML = `
    <div class="sharing-box">

        <div class="sharing-header">
            <span class="sharing-tag">
                💌 Góc tâm sự
            </span>

            <h2>
                Bạn muốn chia sẻ điều gì?
            </h2>

            <p>
                Hãy viết ra điều bạn đang suy nghĩ.
                Bạn không cần phải diễn đạt thật hoàn hảo.
            </p>
        </div>


        <div class="sharing-form">

            <textarea
                id="sharing-input"
                maxlength="2000"
                placeholder="Hãy chia sẻ điều bạn đang cảm thấy..."></textarea>

            <div class="sharing-bottom">

                <span id="char-count">
                    0 / 2000
                </span>

                <button
                    id="send-sharing"
                    type="button">

                    💬 Gửi tâm sự

                </button>

            </div>

        </div>


        <div
            id="sharing-response"
            class="sharing-response"
            aria-live="polite">
        </div>

    </div>
`;


document.body.insertBefore(
    sharingSection,
    document.querySelector("footer")
);


/* =========================================================
   3. CSS CHO KHU VỰC TÂM SỰ
   ========================================================= */

const sharingStyle = document.createElement("style");

sharingStyle.textContent = `

    .sharing-section {
        padding: 90px 8%;
    }

    .sharing-box {
        max-width: 900px;
        margin: 0 auto;
        padding: 45px;

        background: rgba(255,255,255,0.88);

        border: 1px solid rgba(16,185,129,0.1);
        border-radius: 28px;

        box-shadow:
            0 18px 50px rgba(16,185,129,0.08);
    }

    .sharing-header {
        text-align: center;
        margin-bottom: 30px;
    }

    .sharing-tag {
        display: inline-block;

        margin-bottom: 10px;

        color: #059669;

        font-size: 13px;
        font-weight: 600;
    }

    .sharing-header h2 {
        margin-bottom: 10px;

        font-size: clamp(28px,4vw,40px);

        line-height: 1.2;

        color: #111827;
    }

    .sharing-header p {
        max-width: 600px;

        margin: 0 auto;

        color: #6b7280;

        font-size: 15px;
        line-height: 1.7;
    }

    #sharing-input {
        display: block;

        width: 100%;
        min-height: 220px;

        padding: 18px;

        resize: vertical;

        border: 1px solid #d1d5db;
        border-radius: 17px;

        outline: none;

        background: #fbfffd;

        color: #1f2937;

        font-family: inherit;
        font-size: 15px;

        line-height: 1.7;

        transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;
    }

    #sharing-input:focus {
        border-color: #10b981;

        box-shadow:
            0 0 0 4px rgba(16,185,129,0.1);
    }

    .sharing-bottom {
        display: flex;

        align-items: center;
        justify-content: space-between;

        gap: 15px;

        margin-top: 15px;
    }

    #char-count {
        color: #9ca3af;

        font-size: 13px;
    }

    #send-sharing {
        border: none;

        padding: 12px 22px;

        border-radius: 999px;

        background: #10b981;
        color: white;

        font-family: inherit;

        font-size: 14px;
        font-weight: 600;

        cursor: pointer;

        transition:
            background 0.25s ease,
            transform 0.25s ease;
    }

    #send-sharing:hover {
        background: #059669;

        transform: translateY(-2px);
    }

    #send-sharing:disabled {
        opacity: 0.6;

        cursor: not-allowed;

        transform: none;
    }

    .sharing-response {
        display: none;

        margin-top: 25px;

        padding: 22px;

        background: #ecfdf5;

        border-radius: 18px;

        color: #374151;

        font-size: 15px;

        line-height: 1.8;

        white-space: pre-wrap;
    }

    .sharing-response.show {
        display: block;
    }

    @media (max-width: 600px) {

        .sharing-section {
            padding: 70px 20px;
        }

        .sharing-box {
            padding: 28px 18px;

            border-radius: 22px;
        }

        .sharing-header h2 {
            font-size: 28px;
        }

        .sharing-bottom {
            flex-direction: column;

            align-items: stretch;
        }

        #send-sharing {
            width: 100%;
        }

        #sharing-input {
            min-height: 200px;
        }

    }
`;

document.head.appendChild(sharingStyle);


/* =========================================================
   4. NÚT BẮT ĐẦU TÂM SỰ
   ========================================================= */

if (startButton) {

    startButton.addEventListener("click", (event) => {

        event.preventDefault();

        sharingSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setTimeout(() => {

            const input =
                document.getElementById("sharing-input");

            if (input) {
                input.focus();
            }

        }, 600);

    });

}


/* =========================================================
   5. NÚT KHÁM PHÁ
   ========================================================= */

if (exploreButton) {

    exploreButton.addEventListener("click", (event) => {

        event.preventDefault();

        const features =
            document.getElementById("features-area");

        if (features) {

            features.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =========================================================
   6. ĐẾM KÝ TỰ
   ========================================================= */

const sharingInput =
    document.getElementById("sharing-input");

const charCount =
    document.getElementById("char-count");


if (sharingInput && charCount) {

    sharingInput.addEventListener("input", () => {

        charCount.textContent =
            `${sharingInput.value.length} / 2000`;

    });

}


/* =========================================================
   7. GỬI TÂM SỰ → CLOUDFLARE WORKER AI
   ========================================================= */

const sendSharing =
    document.getElementById("send-sharing");

const sharingResponse =
    document.getElementById("sharing-response");


if (sendSharing && sharingInput && sharingResponse) {

    sendSharing.addEventListener("click", async () => {

        const message =
            sharingInput.value.trim();


        if (!message) {

            sharingResponse.textContent =
                "Bạn hãy viết một chút gì đó trước khi gửi nhé 🌿";

            sharingResponse.classList.add("show");

            return;
        }


        sendSharing.disabled = true;

        sendSharing.textContent =
            "Đang lắng nghe...";


        sharingResponse.classList.remove("show");

        sharingResponse.textContent = "";


        try {

            const response = await fetch(
                "https://hop-thu-tam-ly-ai.hirren-dinel1306.workers.dev",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        message: message
                    })
                }
            );


            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}`
                );
            }


            const data =
                await response.json();


            if (!data.reply) {
                throw new Error(
                    "Không nhận được phản hồi từ AI."
                );
            }


            sharingResponse.textContent =
                data.reply;

            sharingResponse.classList.add("show");


        } catch (error) {

            console.error(
                "Lỗi khi kết nối AI:",
                error
            );


            sharingResponse.textContent =
                "Mình chưa thể kết nối với AI lúc này. " +
                "Bạn thử lại sau một chút nhé 🌿";


            sharingResponse.classList.add("show");


        } finally {

            sendSharing.disabled = false;

            sendSharing.textContent =
                "💬 Gửi tâm sự";

        }

    });

}


/* =========================================================
   8. MENU ĐIỆN THOẠI
   ========================================================= */

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mainNav.classList.toggle("open");


        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );


        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            if (isOpen) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    });


    /* Đóng menu sau khi chọn một mục */

    mainNav
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            });

        });


    /* Nếu chuyển từ mobile sang desktop */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    });

}


/* =========================================================
   9. ĐIỀU HƯỚNG MENU
   ========================================================= */

if (mainNav) {

    mainNav
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    !targetId.startsWith("#")
                ) {
                    return;
                }


                event.preventDefault();


                /* Khu vực tâm sự được tạo bằng JS */

                if (
                    targetId === "#sharing-area"
                ) {

                    sharingSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });

}


/* =========================================================
   10. GÓC KỸ NĂNG
   ========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


const skillData = {

    "Áp lực học tập": {
        title: "📚 Áp lực học tập",
        content:
            "Khi việc học khiến bạn cảm thấy quá tải, " +
            "hãy thử chia nhỏ nhiệm vụ, ưu tiên việc quan trọng " +
            "và dành thời gian nghỉ ngơi hợp lý."
    },

    "Gia đình": {
        title: "👨‍👩‍👧 Gia đình",
        content:
            "Những khác biệt trong gia đình đôi khi rất khó nói. " +
            "Bạn có thể bắt đầu bằng việc chọn một thời điểm bình tĩnh " +
            "và nói về cảm xúc của mình thay vì chỉ nói về lỗi của người khác."
    },

    "Bạn bè": {
        title: "🤝 Bạn bè",
        content:
            "Một tình bạn lành mạnh cần có sự tôn trọng, " +
            "lắng nghe và ranh giới. Bạn không cần phải đồng ý " +
            "với mọi điều chỉ để giữ một mối quan hệ."
    },

    "Kỹ năng thích ứng": {
        title: "🌱 Kỹ năng thích ứng",
        content:
            "Thay đổi có thể khiến bạn lo lắng. Hãy tập trung vào " +
            "những điều bạn có thể kiểm soát và cho bản thân thời gian " +
            "để thích nghi từng bước."
    },

    "Định hướng tương lai": {
        title: "🎯 Định hướng tương lai",
        content:
            "Bạn không nhất thiết phải biết chính xác tương lai ngay hôm nay. " +
            "Hãy tìm hiểu sở thích, điểm mạnh và thử từng bước nhỏ " +
            "để khám phá hướng đi phù hợp."
    },

    "Giao tiếp": {
        title: "💬 Giao tiếp",
        content:
            "Giao tiếp hiệu quả không chỉ là nói rõ suy nghĩ mà còn là " +
            "biết lắng nghe. Hãy sử dụng lời nói tôn trọng và diễn đạt " +
            "nhu cầu của mình một cách rõ ràng."
    },

    "Quản lý cảm xúc": {
        title: "🧠 Quản lý cảm xúc",
        content:
            "Cảm xúc không phải điều cần che giấu. Hãy thử gọi tên cảm xúc, " +
            "tạm dừng trước khi phản ứng và tìm một cách lành mạnh " +
            "để giải tỏa."
    },

    "Quản lý thời gian": {
        title: "⏰ Quản lý thời gian",
        content:
            "Bạn có thể bắt đầu bằng việc lập danh sách 3 việc quan trọng " +
            "nhất trong ngày, chia nhiệm vụ lớn thành các bước nhỏ " +
            "và tránh cố gắng làm tất cả cùng lúc."
    }

};


skillCards.forEach((card) => {

    card.addEventListener("click", () => {

        const title =
            card.querySelector("h3")?.textContent.trim();


        if (!title || !skillData[title]) {
            return;
        }


        const oldDetail =
            document.querySelector(".skill-detail");


        if (oldDetail) {
            oldDetail.remove();
        }


        const detail =
            document.createElement("div");


        detail.className =
            "skill-detail";


        detail.innerHTML = `

            <h3>
                ${skillData[title].title}
            </h3>

            <p>
                ${skillData[title].content}
            </p>

        `;


        const skillGrid =
            document.querySelector(".skill-grid");


        if (skillGrid) {

            skillGrid.after(detail);

            detail.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

});


/* =========================================================
   11. NÚT ĐĂNG NHẬP — TẠM THỜI
   ========================================================= */

if (loginButton) {

    loginButton.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Tính năng đăng nhập đang được hoàn thiện 🌿"
        );

    });

}


/* =========================================================
   12. KIỂM TRA
   ========================================================= */

console.log(
    "🌿 Hộp thư tâm lý — Script đã tải thành công."
);
```

});
