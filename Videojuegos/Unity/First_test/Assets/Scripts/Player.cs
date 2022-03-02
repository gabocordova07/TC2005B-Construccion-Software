using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/*
Basic script for player motion. 
*/

public class Player : MonoBehaviour
{
    private Vector3 move;

    [SerializeField] float speed = 0.5f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // Read input from keyboard.
        move.x = Input.GetAxis("Horizontal");
        move.y = Input.GetAxis("Vertical");
        
        // Apply the new data to the object transform.
        transform.Translate(move * speed *Time.deltaTime);
    }
}
