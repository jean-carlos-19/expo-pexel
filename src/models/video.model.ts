import { USerModel } from "./user.model";
import { VideoPicturesModel } from "./video.pictures.model";
import { VideoFilesModel } from "./video.files.model";

interface VideoModel {
 id: number;
 width: number;
 height: number;
 duration: number;
 full_res: null;
 tags: [];
 url: string;
 image: string;
 avg_color: null;
 user: USerModel;
 video_files: VideoFilesModel[];
 video_pictures: VideoPicturesModel[];
}
export type { VideoModel };
