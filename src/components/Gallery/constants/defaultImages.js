import full01 from '../../../assets/images/fulls/1.png'
import full02 from '../../../assets/images/fulls/2.png'
import full03 from '../../../assets/images/fulls/3.png'
import full04 from '../../../assets/images/fulls/4.png'
import thumb02 from '../../../assets/images/thumbs/2.png'
import thumb01 from '../../../assets/images/thumbs/1.png'
import thumb03 from '../../../assets/images/thumbs/3.png'
import thumb04 from '../../../assets/images/thumbs/4.png'

export const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    linkSrc: 'https://github.com/cucumberslice/streams',
    thumbnail: thumb01,
    caption: 'Streaming App',
    description:
      'Every user can create unlimited channels/streams that they can stream to. User can view a list of all streams/channels. User can view video for a single stream. User can create a new stream/channel. User can edit a stream/channel they have created. User can delete a stream/channel they have created.',
  },
  {
    id: '2',
    source: full02,
    linkSrc: 'https://github.com/cucumberslice/ticketing',
    thumbnail: thumb02,
    caption: 'Ticketing App',
    description:
      'Users can list a ticket for an event (concert, sports) for sale. Other users can purchase this ticket. Any user cna list tickets for sale and purchase tickets. When a user attempts to purchase a ticket, the ticket is `locked` for 15 minutes. the user has 15 minutes to enter their payment info. ',
  },
  {
    id: '3',
    source: full03,
    linkSrc: 'https://github.com/cucumberslice/blog-gatsby',
    thumbnail: thumb03,
    caption: 'Blogging Site',
    description:
      'A personal blogging site where the user can blog their content and attach a video link if its available. This site has been bootstrapped using gatsby along with graphQL',
  },
  {
    id: '4',
    source: full04,
    linkSrc: 'https://github.com/cucumberslice/food-search',
    thumbnail: thumb04,
    caption: 'Food Search',
    description:
      'A user can search a restaurant on their mobile device. It uses a search engine api which would list a restaurant in three categories, cheap, expensive and very expensive',
  },
]
