document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // NÚT BẮT ĐẦU TÂM SỰ
    // ==============================

    const startButton = document.querySelector(".btn-primary");

    if (startButton) {
        startButton.addEventListener("click", function (e) {
            e.preventDefault();

            const message = prompt(
                "🌿 Hộp thư tâm lý\n\nHôm nay bạn muốn chia sẻ điều gì?"
            );

            if (message && message.trim() !== "") {
                alert(
                    "💚 Cảm ơn bạn đã chia sẻ.\n\n" +
                    "Điều bạn cảm nhận là điều đáng được lắng nghe. " +
                    "Hãy tiếp tục chia sẻ khi bạn sẵn sàng."
                );
            }
        });
    }


    // ==============================
    // NÚT KHÁM PHÁ
    // ==============================

    const exploreButton = document.querySelector(".btn-secondary");

    if (exploreButton) {
        exploreButton.addEventListener("click", function (e) {
            e.preventDefault();

            const features = document.querySelector(".features");

            if (features) {
                features.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // ==============================
    // MENU ĐIỀU HƯỚNG
    // ==============================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const text = link.textContent.trim();

            if (text === "Trang chủ") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

            else if (text === "Tâm sự") {
                const startButton = document.querySelector(".btn-primary");

                if (startButton) {
                    startButton.click();
                }
            }

            else if (text === "Góc kỹ năng") {
                const features = document.querySelector(".features");

                if (features) {
                    features.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

            else if (text === "Nhật ký") {
                alert(
                    "📖 Nhật ký cảm xúc\n\n" +
                    "Tính năng này sẽ giúp bạn ghi lại những cảm xúc " +
                    "và điều đáng nhớ trong ngày."
                );
            }

            else if (text === "Liên hệ") {
                alert(
                    "💌 Liên hệ\n\n" +
                    "Bạn có thể gửi góp ý để giúp Hộp thư tâm lý " +
                    "ngày càng hoàn thiện hơn."
                );
            }

        });

    });


    // ==============================
    // ĐĂNG NHẬP
    // ==============================

    const loginButton = document.querySelector(".login-btn");

    if (loginButton) {

        loginButton.addEventListener("click", function (e) {

            e.preventDefault();

            alert(
                "🔐 Chức năng đăng nhập\n\n" +
                "Tính năng tài khoản sẽ được phát triển " +
                "ở phiên bản tiếp theo."
            );

        });

    }


    // ==============================
    // HIỆU ỨNG CARD
    // ==============================

    const card = document.querySelector(".hero-card");

    if (card) {

        card.addEventListener("click", function () {

            alert(
                "💚 Hôm nay bạn cảm thấy thế nào?\n\n" +
                "Bạn có thể bắt đầu bằng một câu đơn giản:\n" +
                "“Hôm nay mình đang cảm thấy...”"
            );

        });

    }

});
