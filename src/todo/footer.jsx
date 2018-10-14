//jsx就是把js写在html里面   JSX允许我们以非常类似于HTML的方式声明这个元素
import '../assets/style/footer.styl'
export default {
    data() {
        return {
            author:'Chow'
        }
    },
    render(){
        return (
            <div id = "footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}
