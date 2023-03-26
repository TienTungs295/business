<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostCategory;
use App\Models\PostCategoryTranslation;
use App\Models\PostTranslation;
use App\Models\Project;
use App\Models\ProjectArea;
use App\Models\ProjectAreaTranslation;
use App\Models\ProjectCategory;
use App\Models\ProjectCategoryTranslation;
use App\Models\ProjectField;
use App\Models\ProjectFieldTranslation;
use App\Models\ProjectTranslation;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MigrateMultipleLanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Project
        $projects = Project::all();
        foreach ($projects as $item) {
            ProjectTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'project_id' => $item->id,
                    'locale' => "vi",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'project_id' => $item->id,
                    'locale' => "en",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'project_id' => $item->id,
                    'locale' => "cn",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'project_id' => $item->id,
                    'locale' => "jp",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'project_id' => $item->id,
                    'locale' => "kr",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
        }

        //ProjectCategory
        $project_categories = ProjectCategory::all();
        foreach ($project_categories as $item) {
            ProjectCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'project_category_id' => $item->id,
                    'locale' => "vi",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'project_category_id' => $item->id,
                    'locale' => "en",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'project_category_id' => $item->id,
                    'locale' => "cn",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'project_category_id' => $item->id,
                    'locale' => "jp",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'project_category_id' => $item->id,
                    'locale' => "kr",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
        }

//        ProjectArea
        $project_areas = ProjectArea::all();
        foreach ($project_areas as $item) {
            ProjectAreaTranslation::insert(
                [
                    'name' => $item->name,
                    'project_area_id' => $item->id,
                    'locale' => "vi",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectAreaTranslation::insert(
                [
                    'name' => $item->name,
                    'project_area_id' => $item->id,
                    'locale' => "en",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectAreaTranslation::insert(
                [
                    'name' => $item->name,
                    'project_area_id' => $item->id,
                    'locale' => "cn",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectAreaTranslation::insert(
                [
                    'name' => $item->name,
                    'project_area_id' => $item->id,
                    'locale' => "jp",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectAreaTranslation::insert(
                [
                    'name' => $item->name,
                    'project_area_id' => $item->id,
                    'locale' => "kr",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
        }

        //Project Fields
        $project_fields = ProjectField::all();
        foreach ($project_fields as $item) {
            ProjectFieldTranslation::insert(
                [
                    'name' => $item->name,
                    'project_field_id' => $item->id,
                    'locale' => "vi",
                ]);
            ProjectFieldTranslation::insert(
                [
                    'name' => $item->name,
                    'project_field_id' => $item->id,
                    'locale' => "en",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectFieldTranslation::insert(
                [
                    'name' => $item->name,
                    'project_field_id' => $item->id,
                    'locale' => "cn",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectFieldTranslation::insert(
                [
                    'name' => $item->name,
                    'project_field_id' => $item->id,
                    'locale' => "jp",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            ProjectFieldTranslation::insert(
                [
                    'name' => $item->name,
                    'project_field_id' => $item->id,
                    'locale' => "kr",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
        }

        //Post
        $post = Post::all();
        foreach ($post as $item) {
            PostTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'post_id' => $item->id,
                    'locale' => "vi",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            PostTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'post_id' => $item->id,
                    'locale' => "en",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            PostTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'post_id' => $item->id,
                    'locale' => "cn",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            PostTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'post_id' => $item->id,
                    'locale' => "jp",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            PostTranslation::insert(
                [
                    'name' => $item->name,
                    'content' => $item->content,
                    'post_id' => $item->id,
                    'locale' => "kr",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
        }

        //Post Category
        $post_categories = PostCategory::all();
        foreach ($post_categories as $item) {
            PostCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'post_category_id' => $item->id,
                    'locale' => "vi",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            PostCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'post_category_id' => $item->id,
                    'locale' => "en",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            PostCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'post_category_id' => $item->id,
                    'locale' => "cn",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            PostCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'post_category_id' => $item->id,
                    'locale' => "jp",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            PostCategoryTranslation::insert(
                [
                    'name' => $item->name,
                    'post_category_id' => $item->id,
                    'locale' => "kr",
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
        }
    }
}
