import '../../App.css'
import Slider from '../../ComponentSlider';
import Footer from '../Footer';
import Header from '../Header';
import ListCard from '../ListCard';
import Promotion from '../Promotion';
export default function Home(){
    return(
        <div>
            <Header />
            <Slider />
            <ListCard />
            <Promotion />
            <Footer />
        </div>
    )
}