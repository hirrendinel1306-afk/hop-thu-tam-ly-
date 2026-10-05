document.addEventListener("DOMContentLoaded", () => {

/* =========================================================
   SUPABASE — KẾT NỐI TÀI KHOẢN
   ========================================================= */

const SUPABASE_URL =
    "https://hrngakqcirsioabutnkr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_UZOu8ugF1H4nLtPa8cXtpw_cpyI2-Qw";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

console.log("🌿 Supabase đã kết nối.");
    
    /* =========================================================
       1. CÁC PHẦN TỬ CHÍNH
       ========================================================= */

    const startButton =
        document.querySelector(".hero-buttons .btn-primary");

    const exploreButton =
        document.querySelector(".hero-buttons .btn-secondary");

    const menuToggle =
        document.getElementById("menu-toggle");

    const mainNav =
        document.getElementById("main-nav");

    const loginButton =
        document.getElementById("login-button");


    /* =========================================================
       2. GÓC TÂM SỰ
       LẤY TRỰC TIẾP TỪ INDEX.HTML
       ========================================================= */

    const sharingSection =
        document.getElementById("sharing-area");

    const sharingInput =
        document.getElementById("sharing-input");

    const charCount =
        document.getElementById("char-count");

    const sendSharing =
        document.getElementById("send-sharing");

    const sharingResponse =
        document.getElementById("sharing-response");


    /* =========================================================
       3. NÚT "BẮT ĐẦU TÂM SỰ"
       ========================================================= */

    if (startButton && sharingSection) {

        startButton.addEventListener("click", (event) => {

            event.preventDefault();

            sharingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            setTimeout(() => {

                if (sharingInput) {
                    sharingInput.focus();
                }

            }, 600);

        });

    }


    /* =========================================================
       4. NÚT "KHÁM PHÁ"
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
       5. ĐẾM KÝ TỰ TÂM SỰ
       ========================================================= */

    if (sharingInput && charCount) {

        sharingInput.addEventListener("input", () => {

            charCount.textContent =
                `${sharingInput.value.length} / 2000`;

        });

    }


    /* =========================================================
       6. GỬI TÂM SỰ → CLOUDFLARE WORKER → AI
       ========================================================= */

    if (
        sendSharing &&
        sharingInput &&
        sharingResponse
    ) {

        sendSharing.addEventListener("click", async () => {

            const message =
                sharingInput.value.trim();


            /* Nếu chưa nhập gì */

            if (!message) {

                sharingResponse.textContent =
                    "Bạn hãy viết một chút gì đó trước khi gửi nhé 🌿";

                sharingResponse.classList.add("show");

                sharingInput.focus();

                return;
            }


            /* Trạng thái đang gửi */

            sendSharing.disabled = true;

            sendSharing.textContent =
                "Đang lắng nghe...";


            sharingResponse.classList.remove("show");

            sharingResponse.textContent = "";


            try {

                /* Gửi nội dung tâm sự đến Cloudflare Worker */

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


                /* Kiểm tra kết nối */

                if (!response.ok) {

                    throw new Error(
                        `HTTP ${response.status}`
                    );

                }


                /* Nhận dữ liệu từ Worker */

                const data =
                    await response.json();


                /* Kiểm tra AI có trả lời không */

                if (!data.reply) {

                    throw new Error(
                        "Không nhận được phản hồi từ AI."
                    );

                }


                /* Hiển thị câu trả lời của AI */

                sharingResponse.textContent =
                    data.reply;

                sharingResponse.classList.add("show");


                /* Cuộn nhẹ xuống phần trả lời */

                setTimeout(() => {

                    sharingResponse.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });

                }, 100);


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

                /* Trả nút về trạng thái ban đầu */

                sendSharing.disabled = false;

                sendSharing.textContent =
                    "💬 Gửi tâm sự";

            }

        });

    }


    /* =========================================================
       7. MENU ĐIỆN THOẠI
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


        /* Đóng menu khi chọn một mục */

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


        /* Reset menu khi chuyển sang màn hình lớn */

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
       8. ĐIỀU HƯỚNG MENU
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
       9. GÓC KỸ NĂNG
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
                <h3>${skillData[title].title}</h3>
                <p>${skillData[title].content}</p>
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
   10. ĐĂNG NHẬP — MỞ / ĐÓNG KHUNG
   ========================================================= */

const loginModal =
    document.getElementById("login-modal");

const loginClose =
    document.getElementById("login-close");

const loginOverlay =
    document.getElementById("login-overlay");


/* MỞ KHUNG ĐĂNG NHẬP */

if (loginButton && loginModal) {

    loginButton.addEventListener("click", (event) => {

        event.preventDefault();

        loginModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

}


/* ĐÓNG BẰNG NÚT X */

if (loginClose && loginModal) {

    loginClose.addEventListener("click", () => {

        loginModal.classList.remove("show");

        document.body.style.overflow = "";

    });

}


/* ĐÓNG KHI BẤM RA NGOÀI */

if (loginOverlay && loginModal) {

    loginOverlay.addEventListener("click", () => {

        loginModal.classList.remove("show");

        document.body.style.overflow = "";

    });

}


/* ĐÓNG BẰNG PHÍM ESCAPE */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        loginModal &&
        loginModal.classList.contains("show")
    ) {

        loginModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});


/* =========================================================
   11. KHUNG TẠO TÀI KHOẢN
   ========================================================= */

const registerButton =
    document.getElementById("register-button");

const registerModal =
    document.getElementById("register-modal");

const registerClose =
    document.getElementById("register-close");

const registerOverlay =
    document.getElementById("register-overlay");

const backLoginButton =
    document.getElementById("back-login-button");


/* MỞ KHUNG ĐĂNG KÝ */

if (registerButton && registerModal) {

    registerButton.addEventListener("click", (event) => {

        event.preventDefault();

        if (loginModal) {
            loginModal.classList.remove("show");
        }

        registerModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

}


/* ĐÓNG KHUNG ĐĂNG KÝ */

if (registerClose && registerModal) {

    registerClose.addEventListener("click", () => {

        registerModal.classList.remove("show");

        document.body.style.overflow = "";

    });

}


/* ĐÓNG KHI BẤM RA NGOÀI */

if (registerOverlay && registerModal) {

    registerOverlay.addEventListener("click", () => {

        registerModal.classList.remove("show");

        document.body.style.overflow = "";

    });

}


/* QUAY LẠI ĐĂNG NHẬP */

if (backLoginButton && registerModal && loginModal) {

    backLoginButton.addEventListener("click", () => {

        registerModal.classList.remove("show");

        loginModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

}

/* =========================================================
   12. ĐĂNG KÝ TÀI KHOẢN — SUPABASE
   ========================================================= */

const registerForm =
    document.getElementById("register-form");

const registerMessage =
    document.getElementById("register-message");


if (registerForm) {

    registerForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const name =
            document.getElementById("register-name").value.trim();

        const email =
            document.getElementById("register-email").value.trim();

        const password =
            document.getElementById("register-password").value;

        const confirmPassword =
            document.getElementById("register-confirm").value;


        /* KIỂM TRA */

        if (!name || !email || !password || !confirmPassword) {

            registerMessage.textContent =
                "Vui lòng điền đầy đủ thông tin 🌿";

            return;

        }


        if (password.length < 6) {

            registerMessage.textContent =
                "Mật khẩu cần có ít nhất 6 ký tự.";

            return;

        }


        if (password !== confirmPassword) {

            registerMessage.textContent =
                "Mật khẩu nhập lại chưa khớp.";

            return;

        }


        registerMessage.textContent =
            "Đang tạo tài khoản... 🌱";


        /* GỬI THÔNG TIN ĐẾN SUPABASE */

        const { data, error } =
            await supabaseClient.auth.signUp({

                email: email,

                password: password,

                options: {

                    data: {
                        display_name: name
                    }

                }

            });


        /* XỬ LÝ LỖI */

        if (error) {

            console.error(error);

            registerMessage.textContent =
                "Không thể tạo tài khoản: " + error.message;

            return;

        }


        /* ĐĂNG KÝ THÀNH CÔNG */

        console.log(
            "🌱 Tài khoản đã được tạo:",
            data.user
        );


        registerMessage.textContent =
            "Tạo tài khoản thành công! 🌿";


        registerForm.reset();

    });

}


/* =========================================================
   13. XỬ LÝ ĐĂNG NHẬP — SUPABASE
   ========================================================= */

const loginForm =
    document.getElementById("login-form");

const loginMessage =
    document.getElementById("login-message");


if (loginForm) {

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();


        const email =
            document.getElementById("login-email").value.trim();

        const password =
            document.getElementById("login-password").value;


        if (!email || !password) {

            loginMessage.textContent =
                "Vui lòng nhập đầy đủ thông tin 🌿";

            return;

        }


        loginMessage.textContent =
            "Đang đăng nhập... 🌿";


        const { data, error } =
            await supabaseClient.auth.signInWithPassword({

                email: email,

                password: password

            });


        if (error) {

            console.error(error);

            loginMessage.textContent =
                "Đăng nhập chưa thành công. " + error.message;

            return;

        }


        console.log(
            "🌿 Đăng nhập thành công:",
            data.user
        );


        loginMessage.textContent =
            "Đăng nhập thành công! 🌿";

    });


}


/* =========================================================
   14. KIỂM TRA SCRIPT
   ========================================================= */

console.log(
    "🌿 Hộp thư tâm lý — Script đã tải thành công."
);

});                          
