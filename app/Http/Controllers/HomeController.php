<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        $user =  Auth()->user();
        $texts = $user->texts;
        $texts2 = $user->texts->filter(function($text) {
            return $text->checked === "checked";
        });
        // if (count($texts2) == 0) {
        //     $texts2 = $user->texts;
        // }
        return view('home', [
            'texts' => $texts,
            'texts2' => $texts2,
        ]);
    }
}
