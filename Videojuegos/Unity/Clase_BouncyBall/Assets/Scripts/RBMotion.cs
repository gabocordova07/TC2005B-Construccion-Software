/*
Move rigid body by applying forces
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RBMotion : MonoBehaviour
{
    [SerializeField] private float speed;

    private Rigidbody2D rb2D;

    private Vector3 move;
    // Start is called before the first frame update
    void Start()
    {
        rb2D = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        move.x = Input.GetAxis("Horizontal");

        rb2D.AddForce(move);
    }
}
