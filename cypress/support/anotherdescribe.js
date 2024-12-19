import { search_hotel, selecthotel, bookhotel } from '../support/functions';

export const anotherdescribe = () => {
    describe('ssb', () => {
      it('Search hotel', () => {
        search_hotel();
    });
    
    it('Select hotel', () => {
      selecthotel();
    })
      
    it('book hotel', () => {
      bookhotel();
    })
    
    });
}