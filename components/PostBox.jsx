import { postData } from "@/utils/store/postData";
import { faComment, faEye, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const PostBox = () => {
    return (
        <div className="relative sm:overflow-y-scroll sm:h-over-screen postbox_bar">
            {postData.map((post, index) => (
                <Post post={post} key={`${post.postedBy}_${post.id}_${index}`} />
            ))}
        </div>
    )
}

const Post = ({ post }) => {
    return (
        <div className="bg-white shadow-lg m-2">
            {post.companyLogo &&
                <Image src={post.companyLogo} alt="Company Poster" width={300} height={200} className="mx-auto" />
            }
            <section className="">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        {post.userProfile
                            ? <Image src={post.userProfile} alt="User Profile" width={20} height={25} />
                            : <FontAwesomeIcon icon={faUser} className="m-2.5 cursor-pointer" />
                        }
                        <div className="m-2.5">{post.postedBy}</div>
                        <div className={`${post.category.bgColor} m-2.5 text-white py-1 px-2.5 rounded-2xl text-sm cursor-pointer`}>{post.category.type}</div>
                    </div>
                    <div className="px-10 py-2.5 my-2.5">{post.content}</div>
                </div>
            </section>
            <section className="flex justify-around px-2.5 py-1.5">
                <PostFeatures type={post.likes} icon={faHeart} />
                <PostFeatures type={post.views} icon={faEye} />
                <PostFeatures type={`${post.comments.length} comments`} icon={faComment} />
                <PostFeatures type="Share" icon={faShareNodes} />
            </section>
        </div>
    )
}

const PostFeatures = ({ type, icon }) => {
    return (
        <div className="flex flex-row items-center justify-center">
            <FontAwesomeIcon icon={icon} className="m-1.5 cursor-pointer" />
            <span className="text-sm m-1.5 cursor-pointer">{type}</span>
        </div>
    )
}

export default PostBox;
