<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropColumnTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('category', function (Blueprint $table) {
            $table->dropColumn('name');
        });
        Schema::table('post', function (Blueprint $table) {
            $table->dropColumn(['name','content']);
        });
        Schema::table('project', function (Blueprint $table) {
            $table->dropColumn(['name','content']);
        });
        Schema::table('project_area', function (Blueprint $table) {
            $table->dropColumn('name');
        });
        Schema::table('project_category', function (Blueprint $table) {
            $table->dropColumn('name');
        });
        Schema::table('project_field', function (Blueprint $table) {
            $table->dropColumn('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
