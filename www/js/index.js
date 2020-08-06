var taskStr = "";

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        $(document).ready(function(){
            $(".modal").modal();
        });
        this.onload();
    },

    onload: function(){
        document.addEventListener('#addTask',this.addTaskModal,false)
        $(".deleteRow").on('click',function(){
            var parent = $(this).parent("div").parent();
            console.log(parent);
            $(parent).remove();
        });
        $("input#task").on('change',function(){
            taskStr = $("#task").val();
        });
        $("#addTaskModal").on('click',function(){
            var taskrow = $("ul#tasklist li:first").clone(true);
            $(taskrow).find("div").html(taskStr + '<a href="#!" class="secondary-content deleteRow"><i class="material-icons">send</i></a>');
            console.log(taskrow);
            $(taskrow).on('click','.deleteRow',function(){
                var parent = $(this).parent("div").parent();
                console.log(parent);
                $(parent).remove();
            });
            $("ul#tasklist").append(taskrow);
        });


    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.

    // Update DOM on a Received Event

    addTaskModal: function(){

    }
};

app.initialize();