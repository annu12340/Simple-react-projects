import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
   constructor(props) {
      super(props);
      this.state = {
         deck: null,
         drawn: [],
      };
   }

   async componentDidMount() {
      let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
      this.setState({
         deck: deck.data,
      });
   }

   getCard = async () => {
      let id = this.state.deck.deck_id;
      try {
         let cardUrl = `${API_BASE_URL}/${id}/draw/`;
         let cardRes = await axios.get(cardUrl);
         if (!cardRes.data.success) {
            throw new Error("No more cards!");
         }
         let card = cardRes.data.cards[0];
         this.setState((st) => ({
            drawn: [
               ...st.drawn,
               {
                  id: card.code,
                  image: card.image,
                  name: `${card.value} of ${card.suit}`,
               },
            ],
         }));
      } catch (err) {
         alert(err);
      }
   };

   render() {
      const cards = this.state.drawn.map((card) => <Card key={card.id} name={card.name} image={card.image} />);
      return (
         <div>
            <h1 className='Deck-title'>Card Dealer</h1>
            <button className='Deck-btn' onClick={this.getCard}>
               Get Card
            </button>
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <div className='Deck-cards'>{cards}</div>
         </div>
      );
   }
}

export default Deck;
