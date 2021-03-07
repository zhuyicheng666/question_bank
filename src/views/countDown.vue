<template>
  <div>
    <p>倒计时：{{hour}}:{{minute}}:{{second}}</p>
  </div>
</template>
<script>
export default {
   name:'countDown',
     data() {
                return {
                    hours: 1,
                    minutes: 10,
                    seconds: 0
                }
            },
            mounted() {
                this.add();
            },
            methods: {
                // 防止数值小于10时，出现一位数
                num(n) {
                    return n < 10 ? '0' + n : '' + n
                },
                // 倒计时函数
                add() {
                    let time = window.setInterval( ()=> {
                        if (this.hours !== 0 && this.minutes === 0 && this.seconds === 0) {
                            this.hours -= 1;
                            this.minutes = 59;
                            this.seconds = 59;
                        } else if (this.hours === 0 && this.minutes !== 0 && this.seconds ===
                            0) {
                            this.minutes -= 1;
                            this.seconds = 59;
                        } else if (this.hours === 0 && this.minutes === 0 && this.seconds ===
                            0) {
                            this.seconds = 0
                            window.clearInterval(time)
                        } else if (this.hours !== 0 && this.minutes !== 0 && this.seconds ===
                            0) {
                            this.minutes -= 1;
                            this.seconds = 59;
                        } else {
                            this.seconds -= 1;
                        }
                    }, 1000)
                }
            },
            watch: {
                // 监听数值变化
                second: {
                    handler(newVal) {
                        this.num(newVal)
                    }
                },
                minute: {
                    handler(newVal) {
                        this.num(newVal)
                    }
                },
                hour: {
                    handler(newVal) {
                        this.num(newVal)
                    }
                }
            },
            computed: {
                // 初始化数据
                second() {
                    return this.num(this.seconds)
                },
                minute() {
                    return this.num(this.minutes)
                },
                hour() {
                    return this.num(this.hours)
                }
            }

}
</script>