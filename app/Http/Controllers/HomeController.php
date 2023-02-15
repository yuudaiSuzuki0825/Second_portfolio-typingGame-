<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Text;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = Auth()->user();
        $texts = $user->texts;
        return view('home', [
            'texts' => $texts,
        ]);
    }

    public function question()
    {
        $question = [
            "Q:そもそも何ができるアプリ?" => "A:ユーザーが自由に問題を作ることができるタイピングゲームとなっております。",
            "Q:便利な活用法を教えて!!" => "A:2種類の使い方を推奨します。1つ目はタイトルに日本語入力し、本文にそのローマ字訳を書いていきます。2つ目はタイトルに日本語入力し、本文にその英訳を書いていきます。ローマ字ないしは英文のタイピング技術を鍛えることが可能です。",
            "Q:本アプリの一番の注意点を教えて!!" => "A:本文は半角英数字とピリオド、半角スペース、シングルクォーテーション、カンマ、ハイフンのみ受け付ける仕様となっております。",
            "Q:スタートボタンはどれ?" => "Let's Challengeの右端のplayボタンをクリックして下さい。ホバーすると、「start」と表示されるのが該当するボタンとなっております。",
            "Q:文書作成はどこから行うの?" => "画面右端の文書作成欄から行ってください。",
            "Q:文書は幾つでも作れるの?" => "申し訳ありません。文書の最大上限数は15件となっております。",
            "Q:文書の削除はどうすればできるの?" => "文書一覧の各項目の左端に位置するゴミ箱アイコンをクリックしてください。なお、文書一覧から一度削除されても完全に消去されず、最近削除した項目に移動します。そこから復元が可能です。",
            "Q:文書を一切作らずにゲームできるの?" => "デフォルトで設定されている文書が代わりに出題されます。",
            "Q:最近削除した項目って何?" => "文書一覧から一度削除しても完全には消去されず、最近削除した項目に移動されます。一定期間内であればそこから復元が可能です。",
            "Q:最近削除した項目にも上限数はあるの?" => "ございます。最大上限数は15件となっております。",
            "Q:一刻も早く、最近削除した項目から文書を消したい!!" => "ユーザーが任意に自動削除を待たずに削除できるボタンがございます。ゴミ箱のアイコンをクリックして下さい。なお、警告としてダイアログが表示されます。"
        ];
        return view('question', [
            "question" => $question,
        ]);
    }
}
