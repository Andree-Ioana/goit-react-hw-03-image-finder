// App.js
import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const API_KEY = '42271734-ccd5724e9f8ad9dee5c32e4fe';
const apiUrl = 'https://pixabay.com/api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      page: 1,
      images: [],
      loading: false,
      error: null,
      selectedImage: null,
    };
  }

  // componentDidMount este apelata imediat dupa ce componenta s a randat in arborele DOM
  // in interior apelam fetchImages pt a incarca imaginile cautate

  componentDidMount() {
    this.fetchImages();
  }

  //  componenta componentDidUpdate este apelata dupa fiecare actualizare a starii sau prop
  // in continuare verificam daca cautarea sau pagina s au schimbat, iar daca s a intamplat asta
  // se apeleaza fetchImages ca sa incarce noile imagini

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.fetchImages();
    }
  }

  // fetchImages metoda care face o cerere GET la API Pixaby
  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });
    axios.get(apiUrl, {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
      }
    })

      .then(response => {
        if (response.status === 200) {
          this.setState(prevState => ({
            images: [...prevState.images, ...response.data.hits],
            error: null
          })); 
        } else {
          throw new Error ('Cererea a eșuat cu statusul:', response.status); 
          }
      })
      .catch(error => {
        console.log('Eroare in timpul cererii:', error.message);
        this.setState({ error: error.message });
      })
      .finally(() => {
          this.setState({ loading: false });
    })
    
  };
  handleSearch = newQuery => {
    this.setState({ query: newQuery, page: 1, images: [], error: null })
  }

  handleImageClick = image => {
    this.setState({ selectedImage: image });
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  handleCloseModal = () => {
    this.setState({selectedImage: null});
  }
  render() {
    const { images, loading, error, selectedImage } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearch} />
        {error && <div>Error: {error}</div>}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
