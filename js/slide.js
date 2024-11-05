$(function () {
    let total = $(".panel li").length;
    console.log(total);
    let i = 0;
    // 함수 호출 후 사용
    // 함수는 적응되면 사용하기
    // start();

    // 진행 하도록 함수 만들기
    function start() {
        timer = setInterval(function () {
            i++;
            if (i == total - 1) {
                $(".panel")
                    .stop()
                    .animate({ "maring-left": "-2000px" }, function () {
                        $(".panel").css({ "margin-left": "0" });
                    });
                i = 0;
            } else {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": -i * 500 });
            }

            // navi bar
            $(".navi li").removeClass("on");
            $(".navi li").eq(i).addClass("on");
        }, 2000);
    }

    // navi bar
    // $(".navi li").removeClass("on");
    // $(".navi li").eq(i).addClass("on");
    start();

    // next버튼
    $(".next").on("click", function () {
        clearInterval(timer);
        i++;
        if (i == total - 1) {
            $(".panel")
                .stop()
                .animate({ "maring-left": -2000 }, function () {
                    $(".panel").css({ "margin-left": "0" });
                });
            i = 0;
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }
        // navi bar
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
        start();
    });

    // prev 버튼

    // css는 콜백이 안된다
    // append는 자릿수가 바껴서 안된다
    $(".prev").on("click", function () {
        clearInterval(timer);
        i--;
        if (i < 0) {
            $(".panel").css({ "margin-left": "-2000px" });
            $(".panel").stop().animate({ "margin-left": "-1500px" });
            i = 3; //eq의 3번째
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }

        // navi bar
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
        start();
    });

    $(".navi li").on("click", function () {
        clearInterval(timer);
        // i++ 클릭한 이미지만 보이기위해 제거
        i = $(this).index();

        if (i == total - 1) {
            $(".panel")
                .stop()
                .animate({ "maring-left": -2000 }, function () {
                    $(".panel").css({ "margin-left": "0" });
                });
            i = 0;
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
        start();
    });
}, 2000);

// 마지막까지 가고 , 원래 보이는 이미지부터 다시 진행 마지막자리라면 eq는 3으로
