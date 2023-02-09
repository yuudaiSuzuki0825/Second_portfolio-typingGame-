<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\models\Text;
use App\models\User;
use App\Rules\alpha_num_check;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class TextController extends Controller
{

    private $checked = "checked";

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'title' => 'required|max:50',
        //     'body' => 'required|max:500',
        // ]);

        // return Validator::make($data, [
            // 'title' => ['required', 'max:50'],
            // 'body' => ['required', 'max:500', new alpha_num_check()],
        // ]);

        $user = Auth()->user();
        $texts = $user->texts;

        if ($texts->count() >= 15) {
            session()->flash('NG', '上限数（15件）を超えて保存できません。');
            return redirect('/');
        }

        $validator = Validator::make($request->all(), [
            'title' => ['required', 'max:255'],
            'body' => ['required', 'max:500', new alpha_num_check()],
        ]);

        // 記述方法：Validator::make('値の配列', '検証ルールの配列');

        if ($validator->fails()) {
            return redirect('/')
            ->withErrors($validator)
            ->withInput();
        } else {
            $text = new Text;

            $text->create([
                'title' => $request->title,
                'body' => $request->body,
                'user_id' => Auth()->user()->id,
            ]);

            session()->flash('ok', '正常に動作しました。');

            return redirect('/');
        }

        // $text = new Text;

        // $text->create([
        //     'title' => $request->title,
        //     'body' => $request->body,
        //     'user_id' => Auth()->user()->id,
        // ]);

        // session()->flash('ok', '正常に動作しました。');

        // return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Text $text)
    {
        $text->delete();

        return redirect('/');
    }

    public function checked($id)
    {
        $text = Auth()->user()->texts()->find($id);
        $text->checked = $this->checked;
        $text->save();
        return redirect('/');
    }

    public function unchecked($id)
    {
        $text = Auth()->user()->texts()->find($id);
        $text->checked = null;
        $text->save();
        return redirect('/');
    }

    public function deleteList()
    {
        $user = Auth()->user();
        $texts = $user->texts()->onlyTrashed()->get();
        return view('deleteList', [
            'texts' => $texts
        ]);
    }

    public function restore(Text $text)
    {
        $user = Auth()->user();
        $user->texts()->onlyTrashed()->where('id', $text->id)->restore();
        return redirect('/text/deleteList');
    }

    public function forceDelete(Text $text)
    {
        $user = Auth()->user();
        $user->texts()->onlyTrashed()->where('id', $text->id)->forceDelete();
        return redirect('/text/deleteList');
    }
}
