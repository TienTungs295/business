
@foreach($project_categories as $item)
    @if($item["parent_id"] == $parent_id)
        <option value="{!! $item["id"] !!}"
            {!! isset($selected_id) && $selected_id == $item["id"] ? 'selected' : ''!!}>
            {!!$prefix!!}
            @if($prefix == "")
                 {!! $item["name"] !!}
            @else
                --| {!!$item["name"]!!}
            @endif
        </option>
        @include('backend.project-category.tree_select',['project_categories' => $project_categories,'selected_id' => $selected_id,'parent_id' => $item["id"],'prefix'=> $prefix." --|"])
    @endif
@endforeach
