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
                v-for="(answer, index) in answers"
                :key="index"
                @click.prevent="selectAnswer(index)"
                :class="[selectedIndex === index ? 'selected' : '']"
                >{{ answer }}
            </b-list-group-item>
        </b-list-group>
        <div class="btnContainer">
            <b-button variant="danger">Submit</b-button>
            <b-button variant="success" @click="next">Next</b-button>
        </div>
    </div>
</template>

<script>
export default {
    //props中申明的变量用于接收父组件传递过来的值
    props: {
        next: Function,
        currentQuestion: Object
    },
    //提供变量供本组件使用，它的子组件也可以通过props来接受该值
    data() {
        return {
            selectedIndex: null
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
    //绑定方法
    methods: {
        selectAnswer(index) {
            this.selectedIndex = index;
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
    background-color: lightcoral;
}
.correct {
    background-color: lightgreen;
}
.incorrect {
    background-color: red;
}
</style>

