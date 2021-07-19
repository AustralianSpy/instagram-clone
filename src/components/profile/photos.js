import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

export default function Photos({photos}) {
    const collection = null;
    return photos;
}

Photos.propTypes = {
    photos: PropTypes.array.isRequired
}