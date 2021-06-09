<?php

/* ----------------- DESCRIÇÃO DO TESTE -----------------------*/

/*
Implemente uma função que ao receber um array associativo contendo arquivos e donos, retorne os arquivos agrupados por dono.

Por exempolo, um array ["Input.txt" => "Jose", "Code.py" => "Joao", "Output.txt" => "Jose"] a função groupByOwners deveria retornar ["Jose" => ["Input.txt", "Output.txt"], "Joao" => ["Code.py"]].

 */

class FileOwners
{
    public static function groupByOwners($files)
    {
        $array1 = array_values($files);
        $array2 = array_keys($files);
        $array = array();
        foreach ($array1 as $key => $value) {
            $array[$value][$key] = $array2[$key];
        }
        return $array;
    }
}

$files = array
    (
    "Input.txt" => "Jose",
    "Code.py" => "Joao",
    "Output.txt" => "Jose",
    "Click.js" => "Maria",
    "Out.php" => "maria",

);
print_r(FileOwners::groupByOwners($files));
