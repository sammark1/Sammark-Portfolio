import Container from 'react-bootstrap/Container';
function Contact(props){
    return(
    <div className={props.showing?'transitional' : 'transitional hide'}>
    <div id='contact' className="page-height">
        <h2 className="text-center">Here's how to order!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque totam laboriosam quod quis repellendus ad corporis doloribus, est nulla repudiandae aliquam. Optio quaerat aspernatur enim illo sunt totam. Perspiciatis!</p>
    </div>
    </div>
    )
}

export default Contact;