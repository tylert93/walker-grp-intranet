import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

class Home extends React.Component {
    render() {
        return (
            <div className="vh-100">
                <Header />
                <div className="container mt-5">
                    <h3 className="text-center">Welcome to the Walker Group Intranet</h3>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ullamcorper purus eget pharetra. Proin sed nisi vitae erat venenatis euismod a at lacus. Nulla lacus nisi, facilisis eu erat in, commodo pharetra metus. Fusce et mauris eu mi condimentum efficitur id quis arcu. Aliquam suscipit euismod mi a gravida. Etiam tempor sapien tellus, non sagittis mauris feugiat euismod. Cras lacinia diam at nibh hendrerit pharetra. Vestibulum eget felis id sem tincidunt vestibulum sed vitae ipsum. Aenean eget fringilla velit. Maecenas sed nunc at lacus pretium sagittis. Duis pellentesque libero et ultricies tempor. Donec vehicula varius purus vitae egestas. Nam odio risus, eleifend vel fermentum nec, dapibus vitae turpis. Duis tempus tincidunt massa sit amet aliquet. Praesent sed nunc pharetra, fringilla ligula consequat, tempus tellus</p>
                </div>
                <Footer />
            </div>
           
        )
    }
}

export default Home