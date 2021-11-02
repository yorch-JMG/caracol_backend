import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage('Fondocaracol'),
              fit: BoxFit.cover
            ),
          ),
          child: Scaffold(
            backgroundColor: Colors.indigo,
            body: Container(
              padding: EdgeInsets.only(
                  top: 130,

                  bottom: 10,
                  right: 10,
                  left: 10
              ),
              decoration: BoxDecoration(
                  image: DecorationImage(
                      image: NetworkImage(
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6q20JRkisLTEacLZZyWenViiAe60soW30kisUQhPwOryB2cxQlP7SX0zxj6tlfOJv1M&usqp=CAU"),
                      alignment: Alignment.topCenter)),
              child: Column(
                children: <Widget>[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Column(
                        children: <Widget>[
                          Padding(
                            padding: EdgeInsets.all(10),
                            child: RaisedButton(
                              color: Colors.white,
                              shape: new RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(10.0)),
                              onPressed: () {},
                              child: SizedBox(
                                width: 100,
                                height: 100,
                                child: Center(
                                  child: Text("OPTION 1",
                                      textAlign: TextAlign.center),
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                      Column(
                        children: <Widget>[
                          Padding(
                            padding: EdgeInsets.all(10),
                            child: RaisedButton(
                              color: Colors.white,
                              shape: new RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(10.0)),
                              onPressed: () {},
                              child: SizedBox(
                                width: 100,
                                height: 100,
                                child: Center(
                                  child: Text("OPTION 2",
                                      textAlign: TextAlign.center),
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    ],
                  ),

                ],
              ),
            ),
          ),
        ));
  }
}