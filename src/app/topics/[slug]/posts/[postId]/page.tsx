import CommentCreateForm from "@/components/comments/comment-create-form";
import PostShow from "@/components/posts/post-show";
import paths from "@/paths";
import Link from "next/link";
import { fetchCommentByPostId } from "@/db/queries/comments";
import CommentList from "@/components/comments/comment-list";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;
  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"<"}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentByPostId(postId)} />
    </div>
  );
}
