<template>
    <div>
        <h1 class="text-success" style="text-align:left;">
            Now let me ask you :
        </h1>
        <h2>{{ currentQuestion.question }}</h2>
        <h1 class="text-success" style="text-align:left;">
            Choose the right answer：
        </h1>
        <b-list-group>
            <b-list-group-item
                v-for="(answer, index) in shuffledAnswers"
                :key="index"
                @click.prevent="selectAnswer(index)"
                :class="[selectedIndex == index ? 'selected' : '']"
                v-html="answer"
            >
            </b-list-group-item>
        </b-list-group>
        <div class="btnContainer">
            <b-button
                variant="danger"
                @click="submitAnswer"
                :disabled="selectedIndex === null || answered"
            >
                Submit
            </b-button>
            <b-button variant="success" @click="next">Next</b-button>
        </div>
    </div>
</template>

<script>
//导入第三方的js工具包
//lodash 可以极大程度的简化数据，字符串，对象的操作，无任何依赖项
import _ from "lodash";

export default {
    //props中申明的变量用于接收父组件传递过来的值
    props: {
        next: Function,
        increment: Function,
        currentQuestion: Object
    },
    //提供变量供本组件使用，它的子组件也可以通过props来接受该值
    data() {
        return {
            correctIndex: null,
            selectedIndex: null,
            shuffledAnswers: [],
            answered: false
        };
    },
    //属性计算，基于响应式依赖进行缓存，只在相关响应依赖改变时，才会重新计算值
    //与绑定方法不同的时，会产生缓存，不会在调用组件时刷新数据
    computed: {
        //计算answers属性
        answers() {
            //用es6的 扩展运算符 实现数组的深拷贝
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            return answers;
        }
    },
    //监听属性值的改变
    watch: {
        currentQuestion: {
            //绑定监听时，立即执行handler方法 immediate: true
            //watch的handler默认只有在属性的值发生改变时才会触发（故初次绑定时不会触发）
            immediate: true,
            handler() {
                this.answered = false;
                this.selectedIndex = null;
                this.shuffleAnswers();
            }
        }
    },
    //绑定方法
    methods: {
        //选择答案
        selectAnswer(index) {
            this.selectedIndex = index;
        },
        //提交答案
        submitAnswer() {
            let isCorrect = false;
            let tipsMessage =
                "<span style='color:red;' class='float-right'>Oops, Incrrect</span>";
            if (this.selectedIndex === this.correctIndex) {
                isCorrect = true;
                tipsMessage =
                    "<span style='color:green;'  class='float-right'>Yes, You Got It.</span>";
            } else {
                this.shuffledAnswers[this.correctIndex] +=
                    "<span class='float-right text-warning'>Right answer here</span>";
            }

            this.answered = true;
            this.increment(isCorrect); //记录选择的次数
            this.shuffledAnswers[this.selectedIndex] += tipsMessage;
            console.log(
                this.shuffledAnswers[this.selectedIndex] +
                    " ------" +
                    this.shuffledAnswers[this.correctIndex]
            );
        },
        //打乱答案数组顺序
        shuffleAnswers() {
            let answer = [
                ...this.currentQuestion.incorrect_answers,
                this.currentQuestion.correct_answer
            ];
            this.shuffledAnswers = _.shuffle(answer);
            this.correctIndex = this.shuffledAnswers.indexOf(
                this.currentQuestion.correct_answer
            );
        }
    },
    mounted: function() {}
};
</script>

<style scope>
.btnContainer button {
    margin-right: 20px;
}
.btnContainer {
    margin-top: 20px;
}
.list-group-item:hover {
    background-color: aliceblue;
}
.list-group-item {
    cursor: pointer;
    text-align: left;
}
.selected {
    background-color: lightgoldenrodyellow !important;
}
.correct {
    background-color: lightgreen !important;
}
.incorrect {
    background-color: red !important;
}
</style>

