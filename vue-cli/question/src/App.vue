<template>
    <div id="app">
        <b-container class="bv-example-row">
            <b-row>
                <b-col md="6" offset="3">
                    <Header />
                    <hr />
                    <QuestionBox
                        v-if="questions.length"
                        :currentQuestion="questions[index]"
                        :next="next"
                    />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Header from "./components/Header";
import QuestionBox from "./components/QuestionBox";

export default {
    name: "app",
    components: {
        Header,
        QuestionBox
    },
    //data回调函数会传递object到每一个子组件，
    //子组件不能反向传递数据到父组件，为了维护数据流
    data() {
        return {
            questions: [],
            index: 0
        };
    },
    methods: {
        next: function() {
            this.index++;
        }
    },
    //mounted回调函数在Vue实例创建成功后触发
    //除开data回调函数之外，其它回调函数凡是用到this关键字的均不能使用胖函数或者箭头函数
    //胖函数或箭头函数不提供this关键字（this关键字会当做普通变量）引发 找不到属性值，或函数的错误
    mounted: function() {
        fetch(
            "https://opentdb.com/api.php?amount=10&category=27&type=multiple",
            {
                method: "get"
            }
        )
            .then(res => {
                return res.json();
            })
            .then(jsonData => {
                this.questions = jsonData.results;
            });
    }
};
</script>

<style >
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
