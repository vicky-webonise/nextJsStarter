import Link from "next/link";

export default function BlogCard(props) {
  return (
    <div className="col-6 blogCard">
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">
            <Link href={`/blog/${props.postList.id}`}>
              {props.postList.title}
            </Link>
          </h5>
          <p className="card-text">{props.postList.body}</p>
          <Link href={`/blog/${props.postList.id}`}>
            <a className="btn btn-primary">Go to Post {props.postList.id}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
