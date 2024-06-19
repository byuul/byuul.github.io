import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export type PostType = {
    date: string;
    title: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(limit: number) {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        matterResult.data;
        return {
            id,
            ...(matterResult.data as PostType),
        };
    });

    const allPosts = allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });

    const filterPosts = allPosts.filter((post) => post.title.length !== 0);

    if (limit !== 0) {
        return filterPosts.slice(0, limit);
    } else {
        return filterPosts;
    }
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
