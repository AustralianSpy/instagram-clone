import PropTypes from 'prop-types';

export default function Footer({caption, username}) {
    return (
        <div className="p-4 pt-2 pb-2">
            <span className="mr-1 font-bold">{username}</span>
            <span className="ml-2">{caption}</span>
        </div>

    )
}

Footer.propTypes = {
    caption: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};